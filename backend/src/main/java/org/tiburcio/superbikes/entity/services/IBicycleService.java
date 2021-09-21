package org.tiburcio.superbikes.entity.services;
import java.util.List;
import java.util.Optional;

import org.tiburcio.superbikes.entity.models.Bicycle;

public interface IBicycleService {
	List<Bicycle> getAll();
	Optional<Bicycle> getOne(long idBicycle);
	void add(Bicycle bicycle);
	void delete(long idBicycle);
	void update(Bicycle bicycle, long idBicycle);
}
