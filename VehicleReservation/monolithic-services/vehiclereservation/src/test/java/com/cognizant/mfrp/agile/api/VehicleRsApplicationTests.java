package com.cognizant.mfrp.agile.api;


import static org.junit.Assert.assertEquals;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.cognizant.mfrp.agile.api.model.Booking;
import com.cognizant.mfrp.agile.api.model.User;
import com.cognizant.mfrp.agile.api.model.Vehicle;
import com.cognizant.mfrp.agile.api.repository.BookingRepository;
import com.cognizant.mfrp.agile.api.repository.UserRepository;
import com.cognizant.mfrp.agile.api.repository.VehicleRepository;
import com.cognizant.mfrp.agile.api.service.AppUserDetailsService;
import com.cognizant.mfrp.agile.api.service.BookingService;
import com.cognizant.mfrp.agile.api.service.VehicleService;
 
@RunWith(SpringRunner.class)
@SpringBootTest
@FixMethodOrder
public class VehicleRsApplicationTests {
       
       @Autowired
       private VehicleService vehicleService;
       
       @Autowired
       private BookingService bookingService;
       
       @Autowired
       private AppUserDetailsService appUserDetailsService;
       
       @Autowired
       private VehicleRepository vehicleRepository;
       
       @Autowired
       private BookingRepository bookingRepository;
       @Autowired
       private UserRepository userRepository;
 
       @Test
       public void addVehicleTest(){
              
              Vehicle vehicle= new Vehicle(765, "BENZ", "image", "1234","4", "Gas",5000, true, "CTR", new Date(2022, 05, 01), new Date(2019, 05, 01), new Date(2019, 05, 12), true);
              vehicleService.newVehicle(vehicle);
              Optional<Vehicle> result=vehicleRepository.findByName("BENZ");
              assertEquals(result.isPresent(), true);
       
       }
       
       @Test
       public void getAllVehicleTest(){
              List<Vehicle> vehicle= vehicleService.getAllVehicle();
              assertEquals(vehicle.isEmpty(), false);
       }
       @Test
       public void aamodifyVehicleTest(){
              Optional<Vehicle> result=vehicleRepository.findByName("BENZ");
              Vehicle vehicle= result.get();
              vehicle.setStatus(false);
              vehicle.setImage("image1");
              vehicle.setActive(false);
              vehicleService.modifyVehicle(vehicle);
              Optional<Vehicle> res2=vehicleRepository.findById(vehicle.getId());
              Vehicle vehicle2=res2.get();
              assertEquals(vehicle2.getImage(), "image1");
              assertEquals(vehicle2.isStatus(), false);
              assertEquals(vehicle2.isActive(), false);
              assertEquals(vehicle2.getBranch(),"CTR");
              vehicleService.deleteVehicle(vehicle2.getId());
              Optional<Vehicle> res3=vehicleRepository.findById(vehicle.getId());
 
              assertEquals(res3.isPresent(), false);
              
       }
       
       
       
       
 
 
       
 
 
 
}
