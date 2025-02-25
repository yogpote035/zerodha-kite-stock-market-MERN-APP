import React from "react";
import { Route, Routes } from "react-router-dom";

import Application from "./Application";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import Logout from "./Logout";


const Dashboard = () => {
  return (
    <div className="dashboard-container">

      {localStorage.getItem("token") && <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>}
      <div className="content">
        <Routes>

          <Route path="/logout" element={<Logout />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Application />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
