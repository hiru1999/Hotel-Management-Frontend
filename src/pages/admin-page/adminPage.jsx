import { Link, Route, Routes } from "react-router-dom";

import { CiBookmarkCheck , CiImageOn} from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdOutlineMeetingRoom , MdOutlineFeedback} from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

import NavLink from "../../components/nav-link";

import AdminBooking from "../admin/Bookings/adminBookings";
import AdminCategory from "../admin/Categories/adminCategories";
import AdminRoom from "../admin/Rooms/adminRooms";
import AdminUser from "../admin/Users/adminUsers";
import AdminFeedback from "../admin/Feedbacks/adminFeedbacks";
import AdminGalleryItem from "../admin/GalleryItems/adminGalleryItems";

export default function AdminPage(){
    return(
        <div className="w-full max-h-[100vh] overflow-hidden flex">
            
            <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">
                <NavLink icon={CiBookmarkCheck} link="bookings" navLink="Bookings" />;
                <NavLink icon={BiCategory} link="categories" navLink="Categories" />;
                <NavLink icon={MdOutlineMeetingRoom} link="rooms" navLink="Rooms" />;
                <NavLink icon={FaRegUser} link="users" navLink="Users" />;
                <NavLink icon={MdOutlineFeedback} link="feedbacks" navLink="Feedbacks" />;
                <NavLink icon={CiImageOn} link="galleryitems" navLink="Gallery Items" />;
                {/* <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <CiBookmarkCheck/>
                    <Link to="/admin/bookings">Bookings</Link>
                </div> */}
            </div>


            <div className="w-[80%] bg-blue-900 overflow-y-scroll max-h-[100vh]">
                <Routes path="/*">
                    <Route path="/bookings" element={<AdminBooking/>}/>
                    <Route path="/categories" element={<AdminCategory/>}/>
                    <Route path="/rooms" element={<AdminRoom/>}/>
                    <Route path="/users" element={<AdminUser/>}/>
                    <Route path="/feedbacks" element={<AdminFeedback/>}/>
                    <Route path="/galleryitems" element={<AdminGalleryItem/>}/>
                </Routes>
            </div>
            
        </div>
    )
}