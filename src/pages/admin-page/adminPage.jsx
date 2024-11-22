import { Link, Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full max-h-[100vh] overflow-hidden flex">
            
            <div className="w-[20%] bg-blue-400 h-[100vh] flex flex-col">
                <div className="text-white text-[30px] hover:font-bold">
                    <Link to="/admin/bookings">Bookings</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold">
                    <Link to="/admin/categories">Categories</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold">
                    <Link to="/admin/rooms">Rooms</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold">
                    <Link to="/admin/users">Users</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold">
                    <Link to="/admin/feedbacks">Feedbacks</Link>
                </div>
                <div className="text-white text-[30px] hover:font-bold">
                    <Link to="/admin/galleryitems">Gallery Items</Link>
                </div>
            </div>
            <div className="w-[80%] bg-blue-900">
                
            </div>
            
        </div>
    )
}