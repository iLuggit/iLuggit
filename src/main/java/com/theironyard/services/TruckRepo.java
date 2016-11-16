package com.theironyard.services;

import com.theironyard.entities.TruckAccount;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by VeryBarry on 11/16/16.
 */
public interface TruckRepo extends CrudRepository<TruckAccount, Integer>{
}
