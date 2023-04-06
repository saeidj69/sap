
import './App.css';
import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

const Login = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));


function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        </Routes>
      </Suspense>
      </Router>
  );
}

export default App;
