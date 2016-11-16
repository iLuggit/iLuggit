package com.theironyard.entities;

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
        String pickup_address;
        @Column(nullable = false)
        String dropoff_address;
        @Column(nullable = false)
        String haul_description;
        @Column
        String haul_img;
        @Column(nullable = false)
        int poster_account_id;
        @Column
        int truck_account_id;

        public Job() {
        }

        public Job(String pickup_address, String dropoff_address, String haul_description, String haul_img, int poster_account_id, int truck_account_id) {
                this.pickup_address = pickup_address;
                this.dropoff_address = dropoff_address;
                this.haul_description = haul_description;
                this.haul_img = haul_img;
                this.poster_account_id = poster_account_id;
                this.truck_account_id = truck_account_id;
        }

        public int getId() {
                return id;
        }

        public void setId(int id) {
                this.id = id;
        }

        public String getPickup_address() {
                return pickup_address;
        }

        public void setPickup_address(String pickup_address) {
                this.pickup_address = pickup_address;
        }

        public String getDropoff_address() {
                return dropoff_address;
        }

        public void setDropoff_address(String dropoff_address) {
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

        public int getPoster_account_id() {
                return poster_account_id;
        }

        public void setPoster_account_id(int poster_account_id) {
                this.poster_account_id = poster_account_id;
        }

        public int getTruck_account_id() {
                return truck_account_id;
        }

        public void setTruck_account_id(int truck_account_id) {
                this.truck_account_id = truck_account_id;
        }
}
