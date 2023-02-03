import {Redirect, Route,  Navigate} from "react-router-dom";
import React from "react"
import store from "../../store";

export default function PrivateRouter({  children })  {
    if (store.getState().user.role !== "admin") {
        return <Navigate to="/courses" replace />;
    }

    return children;
};

