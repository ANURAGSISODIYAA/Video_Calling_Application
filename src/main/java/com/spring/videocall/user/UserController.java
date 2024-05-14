package com.spring.videocall.user;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpServerErrorException.InternalServerError;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/vd1/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Slf4j
public class UserController {

	private final UserService userService;
     
	@PostMapping("/register")
	public void registerController(@RequestBody User user) {
		userService.register(user);
	}
    
	@PostMapping("/login")
	public User loginController(@RequestBody User user) {
		return userService.login(user);
	}
    
	@PostMapping("/logout")
	public void logoutController(@RequestBody User user) {
		userService.logout(user.getEmail());
	}
    
	@GetMapping
	public List<User> findAll() {
		return userService.findAll();
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String> handle(Exception ex){
		ex.printStackTrace();
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ex.getMessage());
	}
	
	
}
