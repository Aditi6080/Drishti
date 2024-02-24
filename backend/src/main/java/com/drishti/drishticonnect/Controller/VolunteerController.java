package com.drishti.drishticonnect.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.drishti.drishticonnect.Entity.Volunteer;
import com.drishti.drishticonnect.Entity.VolunteerLogin;
import com.drishti.drishticonnect.Service.VolunteerService;

@RestController
@RequestMapping("/api/volunteers") // Set a base path for your endpoints
@CrossOrigin(origins = "*") // Allow requests from any origin, adjust as needed
public class VolunteerController {

    @Autowired
    private VolunteerService service;

    @PostMapping("/addVolunteer")
    public Volunteer addVolunteer(@RequestBody Volunteer volunteer) {
        return service.saveVolunteer(volunteer);
    }

    @PostMapping("/addVolunteers")
    public List<Volunteer> addVolunteers(@RequestBody List<Volunteer> volunteerList) {
        return service.saveVolunteers(volunteerList);
    }

    @GetMapping("/volunteers")
    public List<Volunteer> showAllVolunteers() {
        return service.getVolunteer();
    }

    @GetMapping("/{id}")
    public Volunteer findVolunteerById(@PathVariable int id) {
        return service.getVolunteerById(id);
    }

    @PutMapping("/update")
    public Volunteer updateVolunteer(@RequestBody Volunteer volunteer) {
        return service.updateVolunteer(volunteer);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteVolunteer(@PathVariable int id) {
        return service.deleteVolunteer(id);
    }

    // @GetMapping("/searchByEmail{email}")
    // public Volunteer getVolunteerByEmail(@PathVariable String email) {
    // return service.getVolunteerByEmail(email);
    // }
    @GetMapping("/get")
    public ResponseEntity<Iterable<Volunteer>> getAllRegisters() {
        try {
            Iterable<Volunteer> volunteer = service.list();
            return new ResponseEntity<>(volunteer, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // This should ideally be replaced with proper logging
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/log_in")
    public ResponseEntity<String> login(@RequestParam("email") String email,
            @RequestParam("password") String password) {
        try {
            Iterable<Volunteer> volunteers = service.loginVolunteer(email, password);

            // Assuming that the loginVolunteer method returns a non-null iterable
            if (volunteers.iterator().hasNext()) {
                return new ResponseEntity<>("Successfully logged in", HttpStatus.OK);
            } else {
                return new ResponseEntity<>("Invalid email or password", HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            e.printStackTrace(); // Replace with proper logging
            return new ResponseEntity<>("An error occurred while processing the request",
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
