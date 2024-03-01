import React, { useState } from "react";
import VolunteerRegister from "../pages/VolunteerRegister"; // Update the import path
import Certificate from "../pages/Certificate"; // Update the import path

const ParentComponent = () => {
  const [volunteerFullName, setVolunteerFullName] = useState("");

  const handleVolunteerRegister = (fullName) => {
    // Update state with the provided fullName
    setVolunteerFullName(fullName);
  };

  return (
    <div>
      <VolunteerRegister onRegister={handleVolunteerRegister} />
      <Certificate fullName={volunteerFullName} /> {/* Use proper prop name */}
    </div>
  );
};

export default ParentComponent;
