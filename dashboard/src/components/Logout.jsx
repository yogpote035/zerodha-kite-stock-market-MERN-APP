import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Logout = () => {
    const [logoutText, setLogoutText] = useState("");
    const navigate = useNavigate();
    const onLogout = () => {
        setTimeout(() => {
            setLogoutText("Your Logging Out............");
        }, 1000);
        setTimeout(() => {
            localStorage.removeItem("token");
            navigate("/");
        }, 1500);



    }

    return (
        <div className="orders" style={{ marginTop: "5rem" }}>
            <div className="no-orders">
                <p>Your in Logout Page Application</p>

                {!logoutText && <button onClick={onLogout} className="btn-outline-danger">
                    Logout
                </button>}


                {logoutText && <h3 style={{ color: "red" }}>{logoutText}</h3>}
            </div>
        </div >

    );
};

export default Logout;
