import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "../css/Login.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Name, email, and password are required.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post("https://szdn6rxb-4000.asse.devtunnels.ms/users/register", {
        name,
        email,
        password,
      });
      setLoading(false);
      console.log("Registration successful:", response.data);
      // Handle successful registration, e.g., redirect user to login, etc.
    } catch (error) {
      setLoading(false);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server responded with an error:", error.response.data);
        setError("Registration failed. Please try again.");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request made but no response received:", error.request);
        setError("Network error. Please try again later.");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error during request setup:", error.message);
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center g-0 min-vh-100">
          <div className="col-12 col-md-8 col-lg-6 col-xxl-4 py-5 py-xl-0">
            <div className="card card-outline smooth-shadow">
              <div className="card-body p-4">
                <div className="mb-4">
                  <h1>Register</h1>
                  <p className="mb-6">Please enter your user information.</p>
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={handleNameChange} />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                    <label htmlFor="email">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="text-start my-3">
                    <Link to="/login" className="text-success a-none">
                      Have an account? Login
                    </Link>
                  </div>
                  <button className="btn btn-success w-100 py-2" type="submit" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
