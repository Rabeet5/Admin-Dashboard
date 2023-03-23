import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./DashboardScreens/dashboard";
import Login from "../firebase/login";
import Signup from "../firebase/signup";
import ProtectRoutes from "../Components/ProtectedRoute";

function AllRouters(){

    return<>
    
    <BrowserRouter>
        <Routes>
            <Route path="/dashboard/*" element={<ProtectRoutes Component={<Dashboard />}/>} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </BrowserRouter>
    </>

}

export default AllRouters;