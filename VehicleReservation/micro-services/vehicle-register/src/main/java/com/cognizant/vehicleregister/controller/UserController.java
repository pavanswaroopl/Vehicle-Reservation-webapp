package com.cognizant.vehicleregister.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.vehicleregister.UserAlreadyExistsException;
import com.cognizant.vehicleregister.model.User;
import com.cognizant.vehicleregister.service.AppUserDetailsService;





@RestController
@RequestMapping("/users")
public class UserController {


	@Autowired
	private AppUserDetailsService appUserDetailsService;
	
	@PostMapping
	public boolean signup(@RequestBody @Valid User user) throws UserAlreadyExistsException {
	
		return appUserDetailsService.signup(user);
		}
	
	@GetMapping("/pendingRegistration")
	public List<User> getPendingUsers(){
		return appUserDetailsService.getPendingUsers();
	}
	
	@PostMapping("/editPendingUserStatus")
	public List<User> editPendingUserStatus(@RequestBody User user){
		return appUserDetailsService.editPendingUserStatus(user);
	}
 	
}

