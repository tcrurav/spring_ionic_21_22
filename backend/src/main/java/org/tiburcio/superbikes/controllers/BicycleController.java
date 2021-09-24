package org.tiburcio.superbikes.controllers;

import java.util.List;
import java.util.Optional;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	List<Bicycle> getAll() {
		return bicycleService.getAll();
	}

	@GetMapping("/bicycles/{id}")
	Bicycle getOne(@PathVariable("id") long id) {
		Optional<Bicycle> b = bicycleService.getOne(id);

		if (b.isPresent()) {
			return b.get();
		}
		;

		return null;
	}

	@PostMapping("/bicycles")
	void add(Bicycle bicycle) {
		System.out.println(bicycle.getModel());
		bicycleService.add(bicycle);
	}

	@PostMapping(value = "/bicycles", consumes = "application/json")
	void addJson(@RequestBody String jsonBicycle) {
		ObjectMapper objectMapper = new ObjectMapper();
		try {
			Bicycle bicycle = objectMapper.readValue(jsonBicycle, Bicycle.class);
			bicycleService.add(bicycle);
		} catch (JsonMappingException e) {
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}
}
