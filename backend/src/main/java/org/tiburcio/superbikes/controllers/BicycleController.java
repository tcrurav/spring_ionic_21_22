package org.tiburcio.superbikes.controllers;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.tiburcio.superbikes.entity.models.Bicycle;
import org.tiburcio.superbikes.entity.services.IBicycleService;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

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
	
	@PostMapping("/bicycles")
	void add(Bicycle bicycle) {
		System.out.println(bicycle.getModel());
		bicycleService.add(bicycle);
	}
	
	@PostMapping(value="/bicycles", consumes="application/json")
	void addUsingJson(@RequestBody String bicycleString) {
		ObjectMapper om = new ObjectMapper();
		try {
			Bicycle bicycle = om.readValue(bicycleString, Bicycle.class);
			bicycleService.add(bicycle);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@DeleteMapping("/bicycles/{id}")
	void delete(@PathVariable("id") long id) {
		System.out.println(id);
		bicycleService.delete(id);
	}

}
