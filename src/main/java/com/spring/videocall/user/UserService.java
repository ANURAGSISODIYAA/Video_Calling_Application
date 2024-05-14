package com.spring.videocall.user;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

import org.springframework.stereotype.Service;

@Service
public class UserService {

	private static final List<User> UserList = new ArrayList<>();

	// User Registration
	public void register(User user) {
		user.setStatus("online");
		UserList.add(user);
	}

	// User login
	public User login(User user) {

		var userIndex = IntStream.range(0, UserList.size())
				.filter(i -> UserList.get(i).getEmail().equals(user.getEmail())).findAny()
				.orElseThrow(() -> new RuntimeException("User not Found !!!"));

		var cUser = UserList.get(userIndex);

		if (!cUser.getPassword().equals(user.getPassword())) {
			throw new RuntimeException("Password Incorrect !!!");
		}

		cUser.setStatus("online");

		return cUser;
	}

	// User logOut
	public void logout(String email) {

		var userIndex = IntStream.range(0, UserList.size()).filter(i -> UserList.get(i).getEmail().equals(email))
				.findAny().orElseThrow(() -> new RuntimeException("User not Found !!!"));

		UserList.get(userIndex).setStatus("offline");

	}

	public List<User> findAll() {
		return UserList;
	}

}
