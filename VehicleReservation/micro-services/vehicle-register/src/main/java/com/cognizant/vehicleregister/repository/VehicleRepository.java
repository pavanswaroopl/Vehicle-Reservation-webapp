package com.cognizant.vehicleregister.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.cognizant.vehicleregister.model.Vehicle;



public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {
	
	@Query(value="Select * from vehicle",nativeQuery=true)
	List<Vehicle> getAllCustomerVehicle();

	Optional<Vehicle> findByName(String string);

}
