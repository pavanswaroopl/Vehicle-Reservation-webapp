package com.cognizant.authservice.repository;


import org.springframework.data.repository.CrudRepository;

import com.cognizant.authservice.model.Role;



public interface RoleRepository extends CrudRepository<Role, Integer> {

}
