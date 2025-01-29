
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export default function PrivateRoute({component, redirectTo}){
    const  isLoggedIn = useSelector(selectIsLoggedIn);
     const isRefreshing = useSelector(selectIsRefreshing);
        if (isRefreshing) {
            return <p>Loading...</p>; // Покажемо "Loading" замість блимання
        }
    return isLoggedIn ? component : <Navigate to={redirectTo}/>;
}