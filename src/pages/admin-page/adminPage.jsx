import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import NavLink from "../../components/nav-link";

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


            <div className="w-[80%] bg-blue-900 overflow-y-scroll">
                <Routes path="/*">
                    <Route path="/bookings" element={<h1>Bookings</h1>}/>
                    <Route path="/categories" element={<h1>Categories</h1>}/>
                    <Route path="/rooms" element={<h1>Rooms</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/feedbacks" element={<h1>Feedbacks</h1>}/>
                    <Route path="/galleryitems" element={<h1>Gallery Items</h1>}/>
                </Routes>
            </div>
            
        </div>
    )
}