import React, { useState, useEffect } from "react";
import "../css/VolunteerRegister.css";
import axios from "axios";
import {useNavigate } from "react-router-dom";

const VolunteerRegister = ({ onRegister }) => {
  const [id, setId] = useState("");
  const [Full_Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [Zip, setZip] = useState("");
  const [Registration, setVolunteers] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "fullName":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
      case "state":
        setState(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "zip":
        setZip(value);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    const passRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    const emailRegex = /\S+@\S+\.\S+/;
    if (!Full_Name) {
      errors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!Email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(Email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!Password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!passRegex.test(Password)) {
      errors.password =
        " Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character";
      isValid = false;
    }

    if (!Address) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!City) {
      errors.city = "City is required";
      isValid = false;
    }

    if (!State) {
      errors.state = "State is required";
      isValid = false;
    }
    if (!Country) {
      errors.country = "Country is required";
      isValid = false;
    }
    if (!Zip) {
      errors.zip = "Zip is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get("http://localhost:9999/");
    setVolunteers(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    onRegister(Full_Name); // Pass the value to the onSubmit function provided as a prop
    //setName(""); // Reset input value after submission
    if (validateForm()) {
      try {
        await axios.post("http://localhost:8080/register/save", {
          Full_Name: Full_Name,
          Email: Email,
          Password: Password,
          Address: Address,
          City: City,
          State: State,
          Zip: Zip,
        });
        alert("Volunteer registation has been done successfully");
        setId("");
        setName("");
        setEmail("");
        setPassword("");
        setAddress("");
        setCity("");
        setState("");
        setZip("");
        Load();
      } catch (err) {
        alert("Volunteer Registation Failed");
      }
      navigate("/volunterLogin");
    }
  }

  return (
    <div className="main-register">
      <form className="myform">
        <h1 className="regHeading">Sign Up</h1>
        <div class="form-group col-md-12">
          <label for="Name" className="label-control">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            class="form-control"
            placeholder="Enter Your Name"
            value={Full_Name}
            onChange={handleChange}
            required
            id="Full_Name"
          />
          {errors.fullName && (
            <div className="error" style={{ color: "red" }}>
              {errors.fullName}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputEmail4" className="label-control">
            Email
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email"
            required
            id="Email"
            value={Email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="error" style={{ color: "red" }}>
              {errors.email}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputPassword4" className="label-control">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            placeholder="Password"
            id="Password"
            value={Password}
            onChange={handleChange}
            required
          />
          {errors.password && (
            <div className="error" style={{ color: "red" }}>
              {errors.password}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputAddress" className="label-control">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            name="address"
            placeholder="1234 Main Station.."
            required
            id="Address"
            value={Address}
            onChange={handleChange}
          />
          {errors.address && (
            <div className="error" style={{ color: "red" }}>
              {errors.address}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputCity" className="label-control">
            City
          </label>
          <input
            type="text"
            name="city"
            class="form-control"
            placeholder="City"
            required
            id="City"
            value={City}
            onChange={handleChange}
          />
          {errors.city && (
            <div className="error" style={{ color: "red" }}>
              {errors.city}
            </div>
          )}
        </div>
        <div class="form-group col-md-12">
          <label for="inputState" className="label-control">
            State
          </label>
          <input
            type="text"
            name="state"
            class="form-control"
            placeholder="State"
            id="State"
            value={State}
            onChange={handleChange}
            required
          />
          {errors.state && (
            <div className="error" style={{ color: "red" }}>
              {errors.state}
            </div>
          )}
        </div>

        <div class="form-group col-md-12">
          <label for="inputState" className="label-control">
            Country
          </label>
          <input
            type="text"
            name="country"
            class="form-control"
            placeholder="Country"
            id="Country"
            value={Country}
            onChange={handleChange}
            required
          />
          {errors.country && (
            <div className="error" style={{ color: "red" }}>
              {errors.country}
            </div>
          )}
        </div>

        <div class="form-group col-md-12">
          <label for="inputZip" className="label-control">
            Pincode
          </label>
          <input
            type="text"
            name="zip"
            class="form-control"
            placeholder="Zip"
            required
            id="Zip"
            value={Zip}
            onChange={handleChange}
          />
          {errors.zip && (
            <div className="error" style={{ color: "red" }}>
              {errors.zip}
            </div>
          )}
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-primary" onClick={save}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerRegister;
