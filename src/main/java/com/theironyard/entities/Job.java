package com.theironyard.entities;

import com.google.maps.GeoApiContext;

import javax.persistence.*;

/**
 * Created by VeryBarry on 11/16/16.
 */
@Entity
@Table(name = "jobs")
public class Job {
        @Id
        @GeneratedValue
        public int id;
        @Column(nullable = false)
        public String[] pickup_address;
        @Column(nullable = false)
        public String[] dropoff_address;
        @Column(nullable = false)
        public String haul_description;
        @Column
        public String haul_img;
        @Column
        public Double job_price;
        @ManyToOne
        public User user;
        @Column
        public boolean user_accept;
        @ManyToOne
        public Truck truck;
        @Column
        public boolean truck_accept;
        @Column
        public double latitude;
        @Column
        public double longitude;

        public Job() {
        }

        public Job(String[] pickup_address, String[] dropoff_address, String haul_description, String haul_img, Double job_price, User user) {
                this.pickup_address = pickup_address;
                this.dropoff_address = dropoff_address;
                this.haul_description = haul_description;
                this.haul_img = haul_img;
                this.job_price = job_price;
                this.user = user;
        }

        public Job(int id, String[] pickup_address, String[] dropoff_address, String haul_description, String haul_img, Double job_price, User user, Truck truck) {
                this.id = id;
                this.pickup_address = pickup_address;
                this.dropoff_address = dropoff_address;
                this.haul_description = haul_description;
                this.haul_img = haul_img;
                this.job_price = job_price;
                this.user = user;
                this.truck = truck;
        }

        public Job(int id, String[] pickup_address, String[] dropoff_address, String haul_description, String haul_img, Double job_price, User user, boolean user_accept, Truck truck, boolean truck_accept) {
                this.id = id;
                this.pickup_address = pickup_address;
                this.dropoff_address = dropoff_address;
                this.haul_description = haul_description;
                this.haul_img = haul_img;
                this.job_price = job_price;
                this.user = user;
                this.user_accept = user_accept;
                this.truck = truck;
                this.truck_accept = truck_accept;
        }

        public Job(int id, String[] pickup_address, String[] dropoff_address, String haul_description, String haul_img, Double job_price, User user, boolean user_accept, Truck truck) {
                this.id = id;
                this.pickup_address = pickup_address;
                this.dropoff_address = dropoff_address;
                this.haul_description = haul_description;
                this.haul_img = haul_img;
                this.job_price = job_price;
                this.user = user;
                this.user_accept = user_accept;
                this.truck = truck;
        }

        public Job(int id, String[] pickup_address, String[] dropoff_address, String haul_description, String haul_img, Double job_price, User user, Truck truck, boolean truck_accept) {
                this.id = id;
                this.pickup_address = pickup_address;
                this.dropoff_address = dropoff_address;
                this.haul_description = haul_description;
                this.haul_img = haul_img;
                this.job_price = job_price;
                this.user = user;
                this.truck = truck;
                this.truck_accept = truck_accept;
        }

        public Job(int id, String[] pickup_address, String[] dropoff_address, String haul_description, String haul_img, Double job_price, User user, boolean user_accept, Truck truck, boolean truck_accept, double latitude, double longitude) {
                this.id = id;
                this.pickup_address = pickup_address;
                this.dropoff_address = dropoff_address;
                this.haul_description = haul_description;
                this.haul_img = haul_img;
                this.job_price = job_price;
                this.user = user;
                this.user_accept = user_accept;
                this.truck = truck;
                this.truck_accept = truck_accept;
                this.latitude = latitude;
                this.longitude = longitude;
        }

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public String[] getPickup_address() {
                return pickup_address;
        }

        public void setPickup_address(String[] pickup_address) {
                this.pickup_address = pickup_address;
        }

        public String[] getDropoff_address() {
                return dropoff_address;
        }

        public void setDropoff_address(String[] dropoff_address) {
                this.dropoff_address = dropoff_address;
        }

        public String getHaul_description() {
                return haul_description;
        }

        public void setHaul_description(String haul_description) {
                this.haul_description = haul_description;
        }

        public String getHaul_img() {
                return haul_img;
        }

        public void setHaul_img(String haul_img) {
                this.haul_img = haul_img;
        }

        public Double getJob_price() {
                return job_price;
        }

        public void setJob_price(Double job_price) {
                this.job_price = job_price;
        }

        public User getUser() {
                return user;
        }

        public void setUser(User user) {
                this.user = user;
        }

        public Truck getTruck() {
                return truck;
        }

        public void setTruck(Truck truck) {
                this.truck = truck;
        }

        public boolean isUser_accept() {
                return user_accept;
        }

        public void setUser_accept(boolean user_accept) {
                this.user_accept = user_accept;
        }

        public boolean isTruck_accept() {
                return truck_accept;
        }

        public void setTruck_accept(boolean truck_accept) {
                this.truck_accept = truck_accept;
        }
}
