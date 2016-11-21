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

            Truck truck = new Truck("BartonTruck", PasswordStorage.createHash("1234"), "Barry", "Daniels", "barry.a.daniels@gmail.com", "8439067218", Truck.BedSize.ONE);
            trucks.save(truck);

            jobs.save(new Job("123 Main st", "321 Main St", "Piano", null, user, truck));
            jobs.save(new Job("456 main", "321 Main St", "Washer", null, user, truck));
            jobs.save(new Job("789 Main ", "321 Main St", "Dryer", null, user, truck));
        }
    }

    @PreDestroy
    public void destroy(){
        h2Server.stop();
    }

    @RequestMapping(path = "/luggs", method = RequestMethod.GET)
    public Iterable<Job> getJobs () {
        return jobs.findAll();
    }

    @RequestMapping(path = "/create-lugg", method = RequestMethod.POST)
    public String postJob(HttpSession session, @RequestBody Job job) {
        jobs.save(job);
        return "Job Created";
    }

    @RequestMapping(path = "/user-login", method = RequestMethod.POST)
    public ResponseEntity<User> postUser(HttpSession session, @RequestBody User user) throws Exception {
        User userFromDb = users.findFirstByUseruser(user.getUseruser());
        if (userFromDb == null) {
            return new ResponseEntity<User>(HttpStatus.RESET_CONTENT);
        } else if (!PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<User>(HttpStatus.RESET_CONTENT);
        }
        session.setAttribute("first_name", user.getFirst_name());
        session.setAttribute("useruser", user.getUseruser());
        return new ResponseEntity<User>(user, HttpStatus.OK);
    }
    @RequestMapping(path = "/create-user", method = RequestMethod.POST)
    public ResponseEntity<User> createUser(HttpSession session, @RequestBody User user) throws PasswordStorage.CannotPerformOperationException {
        User userFromDb = users.findFirstByUseruser(user.getUseruser());
        if (userFromDb == null) {
            user.setPassword(PasswordStorage.createHash(user.getPassword()));
            users.save(user);
            session.setAttribute("first_name", user.getFirst_name());
            session.setAttribute("useruser", user.getUseruser());
            return new ResponseEntity<User>(user, HttpStatus.OK);
        }
        return new ResponseEntity<User>(HttpStatus.RESET_CONTENT);
    }
    @RequestMapping(path = "/truck-login", method = RequestMethod.POST)
    public ResponseEntity<Truck> postTruck(HttpSession session, @RequestBody Truck truck) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        Truck truckFromDb = trucks.findFirstByUsertruck(truck.getUsertruck());
        if (truckFromDb == null) {
            return new ResponseEntity<Truck>(HttpStatus.RESET_CONTENT);
        } else if (!PasswordStorage.verifyPassword(truck.getPassword(), truckFromDb.getPassword())) {
            return new ResponseEntity<Truck>(HttpStatus.RESET_CONTENT);
        }
        session.setAttribute("first_name", truck.getFirst_name());
        session.setAttribute("usertruck", truck.getUsertruck());
        return new ResponseEntity<Truck>(truck, HttpStatus.OK);
    }
    @RequestMapping(path = "/create-truck", method = RequestMethod.POST)
    public ResponseEntity<Truck> createTruck(HttpSession session, @RequestBody Truck truck) throws PasswordStorage.InvalidHashException, PasswordStorage.CannotPerformOperationException {
        Truck truckFromDb = trucks.findFirstByUsertruck(truck.getUsertruck());
        if (truckFromDb == null) {
            truck.setPassword(PasswordStorage.createHash(truck.getPassword()));
            trucks.save(truck);
            session.setAttribute("first_name", truck.getFirst_name());
            session.setAttribute("usertruck", truck.getUsertruck());
            return new ResponseEntity<Truck>(truck, HttpStatus.OK);
        }
        return new ResponseEntity<Truck>(HttpStatus.RESET_CONTENT);
    }
    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }
}