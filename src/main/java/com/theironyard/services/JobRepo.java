package com.theironyard.services;

import com.theironyard.entities.Job;
import com.theironyard.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by VeryBarry on 11/16/16.
 */
public interface JobRepo extends CrudRepository<Job, Integer> {
    Job findFirstById(int id);
    Iterable<Job> findByUser(User user);
}
