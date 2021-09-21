package org.tiburcio.superbikes.controllers;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.tiburcio.superbikes.entity.models.Bicycle;
import org.tiburcio.superbikes.entity.services.IBicycleService;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class BicycleController {
	
	@Autowired
	IBicycleService bicycleService;
	
	@GetMapping("/bicycles")
	List<Bicycle> getAll(){
		return bicycleService.getAll();
	}
	
	@GetMapping("/bicycles/{id}")
	Bicycle getOne(@PathVariable("id") long id) {
		Optional<Bicycle> b = bicycleService.getOne(id);
		
		if(b.isPresent()) {
			return b.get();
		};
		
		return null;
	}

}
