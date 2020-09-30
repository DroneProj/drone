package com.droneAPI2.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "library")
public class library {
	
	// attributes
	@Id
	@GeneratedValue
	private int l_id;
	private String library_name;
	private String address;
	private String user_name;
	private String user_surname;
	private String user_cell;
	private String user_password;
	
	
	// getters and setters
	public int getL_id() {
		return l_id;
	}
	public void setL_id(int l_id) {
		this.l_id = l_id;
	}
	public String getLibrary_name() {
		return library_name;
	}
	public void setLibrary_name(String library_name) {
		this.library_name = library_name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getUser_name() {
		return user_name;
	}
	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}
	public String getUser_surname() {
		return user_surname;
	}
	public void setUser_surname(String user_surname) {
		this.user_surname = user_surname;
	}
	public String getUser_cell() {
		return user_cell;
	}
	public void setUser_cell(String user_cell) {
		this.user_cell = user_cell;
	}
	public String getUser_password() {
		return user_password;
	}
	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}
	
	// consttuctor
	public library(int l_id, String library_name, String address, String user_name, String user_surname,
			String user_cell, String user_password) {
		this.l_id = l_id;
		this.library_name = library_name;
		this.address = address;
		this.user_name = user_name;
		this.user_surname = user_surname;
		this.user_cell = user_cell;
		this.user_password = user_password;
	}
	
	
	public library() {

	}

}
