import {Redirect, Route,  Navigate} from "react-router-dom";
import React from "react"

export default function PrivateRouter({  children })  {
    if (true) {
        return <Navigate to="/courses" replace />;
    }

    return children;
};

