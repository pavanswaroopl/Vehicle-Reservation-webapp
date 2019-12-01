package com.cognizant.mfrp.agile.api.model;

import java.util.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "vehicle")
public class Vehicle {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ve_id")
	private int id;

	@Column(name = "ve_name")
	private String name;

	@Column(name = "ve_image")
	private String image;

	@Column(name = "ve_vehicle_no")
	private String vehicleNo;

	@Column(name = "ve_seater")
	private String seater;

	@Column(name = "ve_type")
	private String type;

	@Column(name = "ve_price")
	private float price;

	@Column(name = "ve_active")
	private boolean active;

	@Column(name = "ve_branch")
	private String branch;

	@Column(name = "ve_insurance_exp_date")
	private Date insuranceExpDate;

	@Column(name = "ve_last_service_date")
	private Date lastServiceDate;

	@Column(name = "ve_service_due_date")
	private Date serviceDueDate;
	
	@Column(name = "ve_status")
	private boolean status;
	
	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	@OneToOne(mappedBy="vehicle")
	private Booking booking;

	
	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getVehicleNo() {
		return vehicleNo;
	}

	public void setVehicleNo(String vehicleNo) {
		this.vehicleNo = vehicleNo;
	}

	public String getSeater() {
		return seater;
	}

	public void setSeater(String seater) {
		this.seater = seater;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getBranch() {
		return branch;
	}

	public void setBranch(String branch) {
		this.branch = branch;
	}

	public Date getInsuranceExpDate() {
		return insuranceExpDate;
	}

	public void setInsuranceExpdate(Date insuranceExpDate) {
		this.insuranceExpDate = insuranceExpDate;
	}

	public Date getLastServiceDate() {
		return lastServiceDate;
	}

	public void setLastServiceDate(Date lastServiceDate) {
		this.lastServiceDate = lastServiceDate;
	}

	public Date getServiceDueDate() {
		return serviceDueDate;
	}

	public void setServiceDueDate(Date serviceDueDate) {
		this.serviceDueDate = serviceDueDate;
	}

	@Override
	public String toString() {
		return "Vehicle [id=" + id + ", name=" + name + ", image=" + image + ", vehicleNo=" + vehicleNo + ", seater="
				+ seater + ", type=" + type + ", price=" + price + ", active=" + active + ", branch=" + branch
				+ ", insuranceExpDate=" + insuranceExpDate + ", lastServiceDate=" + lastServiceDate
				+ ", serviceDueDate=" + serviceDueDate + "]";
	}

	public Vehicle() {
	}
	

}
