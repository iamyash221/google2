import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { Results } from "./Results";
export const Routess = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/search" />}
        ></Route>
        <Route exact path="/search" element={<Results />}></Route>
        <Route exact path="/image" element={<Results />}></Route>
        <Route exact path="/news" element={<Results />}></Route>
        <Route exact path="/video" element={<Results />}></Route>
      </Routes>
    </div>
  );
};
