import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
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
      const response = await axios.post('https://your-backend-api-url.com/signup', formData);
      // Handle success
      console.log('Signup successful', response.data);
      // You can redirect or show a success message here
    } catch (err) {
      // Handle error
      setError('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container" style={{ marginTop: "6rem", marginBottom: "6rem", maxWidth: "500px" }}>
      <div className="card shadow-lg border-0 rounded-4 p-5">
        <h2 className='text-center text-primary mb-4'>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control rounded-3  input-form-user"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

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
              className="form-control rounded-3  input-form-user"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
            />
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary rounded-3  input-form-user"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted">
            Already have an account? <NavLink to="/login" className="text-primary">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
