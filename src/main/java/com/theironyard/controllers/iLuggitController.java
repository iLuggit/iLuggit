package com.theironyard.controllers;

import com.google.maps.*;
import com.google.maps.model.Distance;
import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.GeocodingResult;
import com.theironyard.entities.Job;
import com.theironyard.entities.Review;
import com.theironyard.entities.Truck;
import com.theironyard.entities.User;
import com.theironyard.services.JobRepo;
import com.theironyard.services.ReviewRepo;
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

    @Autowired
    ReviewRepo reviews;

    Server h2Server;

    @PostConstruct
    public void init () throws SQLException, PasswordStorage.CannotPerformOperationException{
        h2Server = Server.createWebServer().start();
        if (users.count() == 0) {
            User user = new User("Barton", PasswordStorage.createHash("1234"), "Barry", "Daniels", "barry.a.daniels@gmail.com", "8439067218");
            users.save(user);
            User user1 = new User("Zach", PasswordStorage.createHash("1234"), "Zack", "Oakes", "barry.a.daniels@gmail.com", "8439067218");
            users.save(user1);
            User user2 = new User("Travis", PasswordStorage.createHash("1234"), "Travis", "Hubbard", "barry.a.daniels@gmail.com", "8439067218");
            users.save(user2);
            User user3 = new User("Betsy", PasswordStorage.createHash("1234"), "Betsy", "Hare", "barry.a.daniels@gmail.com", "8439067218");
            users.save(user3);
            User user4 = new User("Kaity", PasswordStorage.createHash("1234"), "Kaity", "Miller", "barry.a.daniels@gmail.com", "8439067218");
            users.save(user4);

            Truck truck = new Truck("BartonTruck", PasswordStorage.createHash("1234"), "Barry", "Daniels", "barry.a.daniels@gmail.com", "8439067218", Truck.BedSize.LargeBed);
            trucks.save(truck);

            Review review = new Review("Once you use iLuggit, you'll never want to buy your own truck!", user);
            reviews.save(review);
            Review review1 = new Review("I CANT BELIEVE IT WAS SO EASY TO GET A TRUCK.", user1);
            reviews.save(review1);
            Review review2 = new Review("Yea, Good Work.", user2);
            reviews.save(review2);
            Review review3 = new Review("When my Prius got flooded in Hurricane Matthew I had to use iLuggit to take my massive puppies, Max and Sammy, to the park", user3);
            reviews.save(review3);
            Review review4 = new Review("When I couldn't fit the whole Roller Derby team in my car, iLuggit carried us all the rink! (Insert Kaity laugh here)", user4);
            reviews.save(review4);
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

    @RequestMapping(path = "/user-luggs", method = RequestMethod.GET)
    public Iterable<Job> getUserJobs(HttpSession session){
        String user = (String) session.getAttribute("useruser");
        return jobs.findByUser(users.findFirstByUseruser(user));
    }
    @RequestMapping(path = "/accept-lugg", method = RequestMethod.POST)
    public String acceptJob(HttpSession session, int id) {
        Job job1 = jobs.findFirstById(id);
        int truckId = (int) session.getAttribute("id");
        Truck truck1 = trucks.findFirstById(truckId);
        job1.setTruck(truck1);
        job1.setTruck_accept(true);
        jobs.save(job1);
        return "Job Accepted";
    }
    @RequestMapping(path = "/pay-lugg", method = RequestMethod.POST)
    public String payJob(HttpSession session, int id) {
        Job job1 = jobs.findFirstById(id);
        int userId = (int) session.getAttribute("id");
        User user1 = users.findFirstById(userId);
        job1.setUser(user1);
        job1.setUser_accept(true);
        jobs.save(job1);
        return "Job Paid";
    }
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
        double price = ((inMetersDouble * 0.012) / 10) + 5;
        String username = (String) session.getAttribute("useruser");
        User user = users.findFirstByUseruser(username);
        job.setJob_price(price);
        job.setUser(user);
        job.setUser_accept(false);
        job.setTruck_accept(false);
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
        session.setAttribute("id", userFromDb.getId());
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
        session.setAttribute("id", truckFromDb.getId());
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
    @RequestMapping(path = "/reviews", method = RequestMethod.GET)
    public Iterable<Review> getReviews() {
        return reviews.findAll();
    }

    @RequestMapping(path = "/test", method = RequestMethod.GET)
    public String testRoute() throws Exception {
        GeoApiContext apiContext = new GeoApiContext();
        apiContext.setApiKey("AIzaSyB8QAVhBnoK5pQC-1hPqRCSvpiyLzmBNyo");
        String pickUpJob = "2312 Portside Way, Charleston, SC";
        GeocodingResult[] latlng = GeocodingApi.newRequest(apiContext).address(pickUpJob).await();
        Double latitude = latlng[0].geometry.location.lat;
        Double longitude = latlng[0].geometry.location.lng;
        System.out.println(latitude);
        System.out.println(longitude);
        return "Test Ran";
    }
}