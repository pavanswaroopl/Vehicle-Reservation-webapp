package com.cognizant.authservice.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cognizant.authservice.model.User;



public interface UserRepository extends CrudRepository<User, Integer> {

	User findByUsername(String username);

	List<User> findAllByStatus(String string);




}
