package com.drishti.drishticonnect.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import com.drishti.drishticonnect.Entity.Volunteer;

public interface VolunteerRepo extends JpaRepository<Volunteer,Integer> {

    Volunteer findByEmailId(String email);

    Iterable<Volunteer> findByEmailIdAndPassword(@Param("email_id") String email_id,@Param("password") String password );
} 