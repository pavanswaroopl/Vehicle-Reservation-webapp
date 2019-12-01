package com.cognizant.mfrp.agile.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.cognizant.mfrp.agile.api.model.User;
import com.cognizant.mfrp.agile.api.model.Vehicle;

public interface UserRepository extends CrudRepository<User, Integer> {

	User findByUsername(String username);

	List<User> findAllByStatus(String string);




}
