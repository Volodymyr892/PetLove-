import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({component, redirectTo}){
    const[ isLoggedIn] = useState(true);
    return isLoggedIn ? component : <Navigate to={redirectTo}/>;
}