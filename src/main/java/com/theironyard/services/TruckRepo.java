package com.theironyard.services;

import com.theironyard.entities.Truck;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by VeryBarry on 11/16/16.
 */
public interface TruckRepo extends CrudRepository<Truck, Integer>{
    Truck findFirstByUsertruck(String usertruck);

}
