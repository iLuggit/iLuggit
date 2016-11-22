package com.theironyard.entities;

import javax.persistence.*;

/**
 * Created by VeryBarry on 11/22/16.
 */
@Entity
@Table(name = "reviews")
public class Review {
    @Id
    @GeneratedValue
    public int id;
    @Column(nullable = false)
    public String review;
    @ManyToOne
    public User user;

    public Review() {
    }

    public Review(int id, String review, User user) {
        this.id = id;
        this.review = review;
        this.user = user;
    }

    public Review(String review, User user) {
        this.review = review;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
