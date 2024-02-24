package com.drishti.drishticonnect.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class VolunteerLogin {

    private String emailId;
    private String password;

}
