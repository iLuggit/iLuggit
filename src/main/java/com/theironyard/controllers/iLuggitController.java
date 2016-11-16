package com.theironyard.controllers;

import com.theironyard.entities.Job;
import com.theironyard.entities.Truck;
import com.theironyard.entities.User;
import com.theironyard.services.JobRepo;
import com.theironyard.services.TruckRepo;
import com.theironyard.services.UserRepo;
import com.theironyard.utilities.PasswordStorage;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.sql.SQLException;

/**
 * Created by VeryBarry on 11/16/16.
 */
@RestController
public class iLuggitController {
    @Autowired
    TruckRepo trucks;

    @Autowired
    UserRepo users;

    @Autowired
    JobRepo jobs;

    Server h2Server;


    @PostConstruct
    public void init () throws SQLException, PasswordStorage.CannotPerformOperationException{
        h2Server = Server.createWebServer().start();
        if (users.count() == 0) {
            User user = new User("Barton", PasswordStorage.createHash("1234"), "Barry", "Daniels", "barry.a.daniels@gmail.com", "8439067218");
            users.save(user);

            Truck truck = new Truck("BartonTruck", PasswordStorage.createHash("1234"), "Barry", "Daniels", "barry.a.daniels@gmail.com", "8439067218", null);
            trucks.save(truck);

            jobs.save(new Job("123 Main st", "321 Main St", "Piano", null, 1, 1));
            jobs.save(new Job("456 main", "321 Main St", "Washer", null, 1, 1));
            jobs.save(new Job("789 Main ", "321 Main St", "Dryer", null, 1, 1));
        }
    }

    @PreDestroy
    public void destroy(){
        h2Server.stop();
    }

    @RequestMapping(path = "/jobs", method = RequestMethod.GET)
    public Iterable<Job> getJobs () {
        return jobs.findAll();
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        User userFromDb = users.findFirstByName(user.getName());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        } else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
        }
        session.setAttribute("name", user.getFirst_name());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }
}