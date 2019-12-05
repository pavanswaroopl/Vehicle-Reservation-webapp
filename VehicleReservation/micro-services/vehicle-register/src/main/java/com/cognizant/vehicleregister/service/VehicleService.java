package com.cognizant.vehicleregister.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.vehicleregister.model.Vehicle;
import com.cognizant.vehicleregister.repository.VehicleRepository;



@Service
public class VehicleService {
	private static final Logger LOGGER = LoggerFactory.getLogger(VehicleService.class);


	@Autowired
	private VehicleRepository vehicleRepository;

	public List<Vehicle> getAllVehicle() {
		List<Vehicle> vehicle = new ArrayList<Vehicle>();
		vehicleRepository.findAll().forEach(vehicle::add);
		return vehicle;

	}

	public Optional<Vehicle> getVehicleByID(int id) {

		return vehicleRepository.findById(id);
	}

	public Vehicle newVehicle(Vehicle vehicle) {
		vehicle.setStatus(true);
		LOGGER.info("vehicle",vehicle);
		
		return vehicleRepository.save(vehicle);
	}

	public void deleteVehicle(int id) {
		Optional<Vehicle> veh = vehicleRepository.findById(id);
		Vehicle vehicle = veh.get();
		vehicleRepository.delete(vehicle);

	}

	public List<Vehicle> getAllCustomerVehicle() {
		return vehicleRepository.getAllCustomerVehicle();
	}

	public void modifyVehicle(Vehicle vehicle) {
		vehicleRepository.save(vehicle);
		
	}

}
