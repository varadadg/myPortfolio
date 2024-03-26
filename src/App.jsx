import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router";
import { appRoutes } from "./Routes";
const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        {appRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}

        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
