import React from "react";
import { Route, Routes } from "react-router-dom";
import { Routing } from "./Routing";
import Landing from "./pages/Advertising/Landing";


export default () => (
  <Routes>
    <Route path={Routing.landing.path} element={<Landing />} />
  </Routes>
);