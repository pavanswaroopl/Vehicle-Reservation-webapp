package com.cognizant.vehicleregister.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.vehicleregister.model.Booking;
import com.cognizant.vehicleregister.model.User;
import com.cognizant.vehicleregister.model.Vehicle;
import com.cognizant.vehicleregister.repository.UserRepository;
import com.cognizant.vehicleregister.repository.VehicleRepository;
import com.cognizant.vehicleregister.service.BookingService;



@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private VehicleRepository vehicleRepository;
	
	
	@PostMapping("/{username}/{vehicleID}")
	public Booking addVehicleToBooking(@PathVariable String username, @PathVariable int vehicleID, @RequestBody Booking booking){
		
		Vehicle vehicle = vehicleRepository.findById(vehicleID).get();
		vehicle.setStatus(false);
		return bookingService.addVehicleToBooking(username,vehicleID,booking);
	}
	@GetMapping("/{username}")
	public Booking viewBooking(@PathVariable String username){
		User user= userRepository.findByUsername(username);
		if(user.getBooking()!=null){
		Booking booking= user.getBooking();
		Vehicle vehicle = booking.getVehicle();
		return booking;
		}
		return null;
	}
	
	@DeleteMapping("/{username}/{vehicleID}")
	public void CancelBooking(@PathVariable String username, @PathVariable int vehicleID){
		Vehicle vehicle = vehicleRepository.findById(vehicleID).get();
		vehicle.setStatus(true);
		bookingService.CancelBooking(username,vehicleID);
	}
}
