package org.tiburcio.superbikes.entity.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tiburcio.superbikes.entity.dao.IBicycleDao;
import org.tiburcio.superbikes.entity.models.Bicycle;

@Service
public class BicycleServiceImpl implements IBicycleService {
	
	@Autowired
	IBicycleDao bicycleDao;

	@Override
	public List<Bicycle> getAll() {
		return (List<Bicycle>) bicycleDao.findAll();
	}

	@Override
	public void add(Bicycle bicycle) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void delete(long idBicycle) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void update(Bicycle bicycle, long idBicycle) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Optional<Bicycle> getOne(long idBicycle) {
		
		return bicycleDao.findById(idBicycle);
	}

}
