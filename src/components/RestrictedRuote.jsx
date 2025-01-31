
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

export default function RestrictedRoute({component, redirectTo}){
    const  isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    if (isRefreshing) {
        return <p>Loading...</p>
    }
    return isLoggedIn ? <Navigate to={redirectTo}/>  : component;
}