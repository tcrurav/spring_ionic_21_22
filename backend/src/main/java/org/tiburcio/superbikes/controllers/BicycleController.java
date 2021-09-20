package org.tiburcio.superbikes.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tiburcio.superbikes.entity.models.Bicycle;
import org.tiburcio.superbikes.entity.services.IBicycleService;

@RestController
public class BicycleController {
	
	@Autowired
	IBicycleService bicycleService;
	
	@GetMapping("/bicycles")
	List<Bicycle> getAll(){
		return bicycleService.getAll();
	}

}
