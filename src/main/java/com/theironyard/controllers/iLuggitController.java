package com.theironyard.controllers;

import com.theironyard.entities.Job;
import com.theironyard.services.JobRepo;
import com.theironyard.services.TruckRepo;
import com.theironyard.services.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.sql.SQLException;

/**
 * Created by VeryBarry on 11/16/16.
 */
@Controller
public class iLuggitController {
    @Autowired
    TruckRepo truck_accounts;

    @Autowired
    UserRepo user_accounts;

    @Autowired
    JobRepo jobs;

    Server h2Server;

    @PostConstruct
    public void init () throws SQLException {
        h2Server = Server.createWebServer().start();
    }

    @PreDestroy
    public void destroy(){
        h2Server.stop();
    }

    @RequestMapping(path = "/jobs", method = RequestMethod.GET)
    public Iterable<Job> getReviews () {
        return jobs.findAll();
    }
}
