package com.droneAPI2.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.droneAPI2.models.library;



@Repository
public interface libRepo extends JpaRepository<library,Integer> {
	
	

}
