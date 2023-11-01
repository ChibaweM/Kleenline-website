import React from "react";
import { Route, Routes } from "react-router-dom";
import { Routing } from "./Routing";
import Landing from "./pages/Advertising/Landing";
import Dashboard from "./pages/Stocks/Dashboard";

export default () => (
  <Routes>
    <Route path={Routing.landing.path} element={<Landing />} />
    <Route path={Routing.Dashboard.path} element={<Dashboard />} />
  </Routes>
);