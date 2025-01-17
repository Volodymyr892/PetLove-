import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayuot/MainLayout";
import HomePage from "../pages/HomePage/HomePage";
import NewsPage from "../pages/NewsPage/NewsPage";
import NoticesPage from "../pages/NoticesPage/NoticesPage";
import OutFriendsPage from "../pages/OurFriendsPage/OutFriendsPage";
import RegistratinPage from "../pages/RegistrationPage/RegistratinPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddPetPage from "../pages/AddPetPage/AddPetPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import RestrictedRoute from "./RestrictedRuote";
import PrivateRoute from "./PrivateRoute";

export default function App() {
    return(
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route path="/home" element={<HomePage/>}/> 
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="/notices" element={<NoticesPage/>}/>
            <Route path="/friends" element={<OutFriendsPage/>}/>

            <Route path="/register" element={<RestrictedRoute component={<RegistratinPage/>} redirectTo={"/profile" }/>}/>
            <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo={"/profile"}/>}/>

            <Route path="/profile" element={<PrivateRoute component={<ProfilePage/>} redirectTo="/login"/>}/>
            <Route path="/add-pet" element={<PrivateRoute component={<AddPetPage/>} redirectTo="/login"/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
)}


