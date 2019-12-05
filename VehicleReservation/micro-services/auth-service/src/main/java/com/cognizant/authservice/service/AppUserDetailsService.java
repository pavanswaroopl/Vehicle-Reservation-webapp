package com.cognizant.authservice.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.cognizant.authservice.model.Role;
import com.cognizant.authservice.model.User;
import com.cognizant.authservice.repository.RoleRepository;
import com.cognizant.authservice.repository.UserRepository;
import com.cognizant.authservice.security.AppUser;





@Service
public class AppUserDetailsService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;

	@Override
	public UserDetails loadUserByUsername(String userID) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(userID);
		if (user == null) {
			throw new UsernameNotFoundException("username not found");
		} else {
			AppUser appUser = new AppUser(user);
			return appUser;
		}

	}

	public AppUserDetailsService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public boolean signup(@Valid User user) {
		User newUser = userRepository.findByUsername(user.getUsername());
		if (newUser != null) {
			return false;
		} else {
			String pass = user.getPassword();
			BCryptPasswordEncoder encode = new BCryptPasswordEncoder();
			String encodePass = encode.encode(pass);
			Optional<Role> result = roleRepository.findById(1);
			Role role = result.get();
			List<Role> setRole = new ArrayList<Role>();
			setRole.add(role);
			user.setRoles(setRole);
			user.setStatus("P");
			user.setPassword(encodePass);
			userRepository.save(user);
			return true;
		}

	}

	public List<User> getPendingUsers() {
		
		return userRepository.findAllByStatus("P");
	}

	public List<User> editPendingUserStatus(User user) {
		User existingUser = userRepository.findById(user.getId()).get();
		existingUser.setStatus(user.getStatus());
		userRepository.save(existingUser);
		return userRepository.findAllByStatus("P");
	}



}
