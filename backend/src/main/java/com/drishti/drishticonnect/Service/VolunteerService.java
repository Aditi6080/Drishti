package com.drishti.drishticonnect.Service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.drishti.drishticonnect.Entity.Volunteer;
import com.drishti.drishticonnect.repository.VolunteerRepo;

@Service
public class VolunteerService{
    @Autowired
    private VolunteerRepo repo;

    @SuppressWarnings("null")
    public Volunteer saveVolunteer(Volunteer volunteer) {
        return repo.save(volunteer);
    }

    @SuppressWarnings("null")
    public List<Volunteer> saveVolunteers(List<Volunteer> voList) {
        return repo.saveAll(voList);
    }

    public List<Volunteer> getVolunteer() {
        return repo.findAll();
    }

    public Volunteer getVolunteerById(int id) {
        return repo.findById(id).orElse(null);
    }

    public String deleteVolunteer(int id) {
        repo.deleteById(id);
        return "Volunteer Removed!!!" + id;
    }

    public Volunteer updateVolunteer(Volunteer volunteer) {
        Volunteer existingVolunteer = repo.findById(volunteer.getId()).orElse(null);
        existingVolunteer.setFirstName(volunteer.getFirstName());
        existingVolunteer.setLastName(volunteer.getLastName());
        existingVolunteer.setAge(volunteer.getAge());
        existingVolunteer.setBirthday(volunteer.getBirthday());
        existingVolunteer.setEmailId(volunteer.getEmailId());
        existingVolunteer.setPassword(volunteer.getPassword());
        existingVolunteer.setCountryCode(volunteer.getCountryCode());
        existingVolunteer.setPhoneNumber(volunteer.getPhoneNumber());
        existingVolunteer.setGender(volunteer.getGender());
        existingVolunteer.setAddress(volunteer.getAddress());
        existingVolunteer.setCity(volunteer.getCity());
        existingVolunteer.setCountry(volunteer.getCountry());
        existingVolunteer.setPinCode(volunteer.getPinCode());
        return repo.save(existingVolunteer);
    }
    // public Volunteer getVolunteerByEmail(String email) {
    //     return repo.findByEmailId(email);
    // }
    public Iterable<Volunteer> list(){
        Iterable<Volunteer> volunteer=repo.findByEmailIdAndPassword("abc@gmail.com","123");
        return volunteer;
    }

    public Iterable<Volunteer> loginVolunteer(String email, String password) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'loginVolunteer'");
    }
}

