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

export default function App() {
    return(
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route path="/home" element={<HomePage/>}/> 
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="/notices" element={<NoticesPage/>}/>
            <Route path="/friends" element={<OutFriendsPage/>}/>
            <Route path="/register" element={<RegistratinPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/add-pet" element={<AddPetPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Route>
    </Routes>
)}


