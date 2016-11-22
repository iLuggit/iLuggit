package com.theironyard.services;

import com.theironyard.entities.Review;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by VeryBarry on 11/22/16.
 */
public interface ReviewRepo extends CrudRepository<Review, Integer> {
}
