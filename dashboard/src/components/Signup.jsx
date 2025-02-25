import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css"

function Signup({ showAlert }) {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const headers = {
                "Content-Type": "application/json"
            };
            const response = await axios.post("https://zerodha-yogesh.onrender.com/signup", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
            }, { headers });

            const data = response.data;
            if (response.status === 200) {
                alert("Registration successful!");
                localStorage.setItem("token", data.authToken);
                navigate("/summary");
            }

        } catch (err) {

            if (err.status === 500) {
                return alert(err.response.data.error || "Internal Server Error");
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light" style={{ marginTop: "4rem" }}>
            <div className="card p-4 shadow-lg w-100" style={{ maxWidth: "400px" }}>
                <h3 className="text-center mb-3">Sign Up</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-outline-primary w-100">
                        Sign Up
                    </button>
                </form>

                <p className="text-center mt-3">
                    Already have an account ?
                    <NavLink className="p-1" to="/">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
}

export default Signup;
