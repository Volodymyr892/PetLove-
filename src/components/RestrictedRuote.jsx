import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute({component, redirectTo}){
    const[ isLoggedIn] = useState(true);
    return isLoggedIn ? <Navigate to={redirectTo}/>  : component;
}