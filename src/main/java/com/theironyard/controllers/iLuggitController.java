package com.theironyard.controllers;

import com.google.maps.*;
import com.google.maps.model.Distance;
import com.google.maps.model.DistanceMatrix;
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

import static org.aspectj.runtime.internal.Conversions.doubleValue;

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

    static final String google_key = "AIzaSyBfP-iSDWJ3Ilz-D3j1obcywarlD0knZzY";

    @PostConstruct
    public void init () throws SQLException, PasswordStorage.CannotPerformOperationException{
        h2Server = Server.createWebServer().start();
        if (users.count() == 0) {
            User user = new User("Barton", PasswordStorage.createHash("1234"), "Barry", "Daniels", "barry.a.daniels@gmail.com", "8439067218");
            users.save(user);

            Truck truck = new Truck("BartonTruck", PasswordStorage.createHash("1234"), "Barry", "Daniels", "barry.a.daniels@gmail.com", "8439067218", Truck.BedSize.ONE);
            trucks.save(truck);

        }
    }

    @PreDestroy
    public void destroy(){
        h2Server.stop();
    }

    @RequestMapping(path = "/luggs", method = RequestMethod.GET)
    public Iterable<Job> getJobs() {
        return jobs.findAll();
    }

    @RequestMapping(path = "/lugg", method = RequestMethod.GET)
    public Job getJob(int id) {
        return jobs.findFirstById(id);
    }

//    @RequestMapping(path = "/accept-lugg", method = RequestMethod.GET)
//    public String acceptJob(HttpSession session, int id) {
//        Job job1 = jobs.findFirstById(id);
//        int truckId = session.getAttribute("id");
//        Truck truck1 = trucks.findFirstById(session.getAttribute("id"))
//        job1.setTruck(truck1);
//        Job job2 = jobs.findFirstById(id);
//        job2
//    }

    @RequestMapping(path = "/create-lugg", method = RequestMethod.POST)
    public String postJob(HttpSession session, @RequestBody Job job) throws Exception {
        String[] origin = job.getPickup_address();
        String[] destination = job.getDropoff_address();
        GeoApiContext apiContext = new GeoApiContext();
        apiContext.setApiKey("AIzaSyB8QAVhBnoK5pQC-1hPqRCSvpiyLzmBNyo");
        DistanceMatrix request = DistanceMatrixApi.getDistanceMatrix(apiContext, origin, destination).await();
        Distance distance = request.rows[0].elements[0].distance;
        long inMeters = distance.inMeters;
        double inMetersDouble = doubleValue(inMeters);
        User user = users.findFirstByUseruser(session.getId());
        Job job1 = new Job(origin, destination, job.getHaul_description(), job.getHaul_img(), inMetersDouble, user);
        jobs.save(job1);
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
        session.setAttribute("id", user.getId());
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
        session.setAttribute("id", truck.getId());
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


//    @RequestMapping(path = "/accept-job", method = RequestMethod.POST)
//    public ResponseEntity<Job> acceptJob(HttpSession session, @RequestBody Job job) {
//        Job jobFromDb = jobs.findOne()
//    }


    @RequestMapping(path = "/logout", method = RequestMethod.POST)
    public void logout(HttpSession session) {
        session.invalidate();
    }
}