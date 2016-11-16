package com.theironyard.services;

import com.theironyard.entities.UserAccount;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by VeryBarry on 11/16/16.
 */
public interface UserRepo extends CrudRepository<UserAccount, Integer> {
}
