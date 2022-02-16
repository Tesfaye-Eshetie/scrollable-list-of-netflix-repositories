import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Items from "./components/Items";
import RecentCommits from "./components/RecentCommits";
import NotFound from "./components/NotFound";


const Routers = () => (
  <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/items" element={<Items />} />
    <Route path="/items/:name" element={<RecentCommits />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </>
);

export default Routers;