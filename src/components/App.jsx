import { Route, Routes } from "react-router-dom";
import { currentFull, getAuthHeader} from "../redux/auth/operations";
import { useDispatch } from "react-redux";
import { lazy, Suspense, useEffect } from "react";

import RestrictedRoute from "./RestrictedRuote";
import PrivateRoute from "./PrivateRoute";
import Favorits from "./Favorits/Favorits";
import Viewed from "./Viewed/Viewed";

const MainLayout = lazy(()=> import('../pages/MainLayuot/MainLayout'))
const HomePage = lazy(()=>import('../pages/HomePage/HomePage'))
const NewsPage = lazy(()=>import('../pages/NewsPage/NewsPage'))
const NoticesPage = lazy(()=>import('../pages/NoticesPage/NoticesPage'))
const OutFriendsPage = lazy(()=>import('../pages/OurFriendsPage/OutFriendsPage'))
const RegistratinPage = lazy(()=>import('../pages/RegistrationPage/RegistratinPage'))
const LoginPage = lazy(()=>import('../pages/LoginPage/LoginPage'))
const AddPetPage = lazy(()=>import('../pages/AddPetPage/AddPetPage'))
const ProfilePage = lazy(()=> import('../pages/ProfilePage/ProfilePage'))
const NotFoundPage = lazy(()=> import('../pages/NotFoundPage/NotFoundPage'))


export default function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        getAuthHeader()
        dispatch(currentFull());
    }, [dispatch]);

    return(
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index  element={<HomePage/>}/> 
                <Route path="home" element={<HomePage />} />
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/notices" element={<NoticesPage/>}/>
                <Route path="/friends" element={<OutFriendsPage/>}/>
    
                <Route path="/register" element={<RestrictedRoute component={<RegistratinPage/>} redirectTo={"/profile" }/>}/>
                <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo={"/profile"}/>}/>
    
                <Route path="/profile" element={<PrivateRoute component={<ProfilePage/>} redirectTo="/login"/>}>
                    <Route index element={<Favorits />} /> {/* За замовчуванням відображається цей компонент */}
                    <Route path="favorits" element={<Favorits />} /> 
                    <Route path="viewed" element={<Viewed />} />
                </Route>
                <Route path="/add-pet" element={<PrivateRoute component={<AddPetPage/>} redirectTo="/login"/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </Suspense>
)}

