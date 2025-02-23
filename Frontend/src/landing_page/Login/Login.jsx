import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Send POST request to your backend with form data
      const response = await axios.post('https://your-backend-api-url.com/login', formData);
      // Handle success
      console.log('Login successful', response.data);
      // You can store the token or redirect here
    } catch (err) {
      // Handle error
      setError('Invalid email or password. Please try again.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: "5rem",marginBottom: "5rem", maxWidth: "450px" }}>
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <h2 className='text-center text-primary mb-4'>Login</h2>
        
        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control rounded-3 input-form-user"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control rounded-3 input-form-user"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary rounded-3"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Logging In...' : 'Login'}
            </button>
          </div>
        </form>

        <div className="text-center mt-3">
          <p className="text-muted">
            Don't have an account? <NavLink to="/signup" className="text-primary">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
