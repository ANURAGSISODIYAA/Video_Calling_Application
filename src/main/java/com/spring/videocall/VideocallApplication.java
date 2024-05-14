package com.spring.videocall;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.spring.videocall.user.User;
import com.spring.videocall.user.UserService;

@SpringBootApplication
public class VideocallApplication {

	public static void main(String[] args) {
		SpringApplication.run(VideocallApplication.class, args);
	}

    @Bean
    public CommandLineRunner commandLineRunner(UserService userService) {
		return args ->{
			userService.register(User.builder()
					.username("Anurag")
					.email("a@gmail.com")
					.password("anurag")
					.build());
			
			userService.register(User.builder()
					.username("Raj")
					.email("r@gmail.com")
					.password("raj")
					.build());
			
			userService.register(User.builder()
					.username("Thomas")
					.email("t@gmail.com")
					.password("thomas")
					.build());
		};
	}

}
