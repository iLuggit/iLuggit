package com.theironyard.services;

import com.theironyard.entities.Job;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by VeryBarry on 11/16/16.
 */
public interface JobRepo extends CrudRepository<Job, Integer> {
    public Iterable<Job> findByLecturer(Job job);

}
