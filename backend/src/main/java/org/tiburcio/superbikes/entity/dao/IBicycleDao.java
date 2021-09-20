package org.tiburcio.superbikes.entity.dao;

import org.springframework.data.repository.CrudRepository;
import org.tiburcio.superbikes.entity.models.Bicycle;

public interface IBicycleDao extends CrudRepository<Bicycle, Long>{

}
