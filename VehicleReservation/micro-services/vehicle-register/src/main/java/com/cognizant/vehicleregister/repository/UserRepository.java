package com.cognizant.vehicleregister.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cognizant.vehicleregister.model.User;



public interface UserRepository extends CrudRepository<User, Integer> {

	User findByUsername(String username);

	List<User> findAllByStatus(String string);




}
