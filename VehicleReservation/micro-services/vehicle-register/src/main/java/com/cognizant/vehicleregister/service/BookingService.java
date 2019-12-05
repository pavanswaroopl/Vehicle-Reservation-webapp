package com.cognizant.vehicleregister.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.vehicleregister.model.Booking;
import com.cognizant.vehicleregister.model.User;
import com.cognizant.vehicleregister.model.Vehicle;
import com.cognizant.vehicleregister.repository.BookingRepository;
import com.cognizant.vehicleregister.repository.UserRepository;
import com.cognizant.vehicleregister.repository.VehicleRepository;


@Service
public class BookingService {
	
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private VehicleRepository vehicleRepository;

	public Booking addVehicleToBooking(String username, int vehicleID, Booking booking) {
		User user = userRepository.findByUsername(username);
		Optional<Vehicle> result = vehicleRepository.findById(vehicleID);
		Vehicle vehicle = result.get();
		booking.setVehicle(vehicle);
		booking.setUser(user);
		
		Date d1 = booking.getBookingStart();
		Date d2 = booking.getBookingEnd();
		
		long diff = d2.getTime() - d1.getTime();
		long diffDays = diff / (24 * 60 * 60 * 1000);
		System.out.println(diffDays);
		double total = vehicle.getPrice();
		float finalPrice= (float) (total * diffDays);
		booking.setPrice(finalPrice);
		return bookingRepository.save(booking);
	}

	public Vehicle viewBooking(String username) {
		
//		return bookingRepository.UserVehicle(username);
		return null;
	}

	public void CancelBooking(String username, int vehicleID) {
		User user = userRepository.findByUsername(username);
		Booking booking = bookingRepository.findByUser(user);
		System.out.println(booking);
		bookingRepository.delete(booking);
		
	}

}
