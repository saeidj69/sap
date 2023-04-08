
import './App.css';
import React from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound"));


function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<NotFound />} />


        </Routes>
      </Suspense>
      </Router>
  );
}

export default App;
