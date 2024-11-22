import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineFeedback } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";

export default function AdminPage(){
    return(
        <div className="w-full max-h-[100vh] overflow-hidden flex">
            
            <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <CiBookmarkCheck/>
                    <Link to="/admin/bookings">Bookings</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <BiCategory/>
                    <Link to="/admin/categories">Categories</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <MdOutlineMeetingRoom/>
                    <Link to="/admin/rooms">Rooms</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <FaRegUser/>
                    <Link to="/admin/users">Users</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <MdOutlineFeedback/>
                    <Link to="/admin/feedbacks">Feedbacks</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold flex items-center">
                    <CiImageOn/>
                    <Link to="/admin/galleryitems">Gallery Items</Link>
                </div>
            </div>


            <div className="w-[80%] bg-blue-900">
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