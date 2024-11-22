import { Route, Routes } from "react-router-dom";

export default function AdminPage(){
    return(
        <div className="w-full h-[100vh] bg-red-400">
            
            <Routes path="/*">
                <Route path="/bookings" element={
                    <div>
                        <h1>Bookings</h1>
                    </div>
                } />
            
                <Route path="/categories" element={
                    <div>
                        <h1>Categories</h1>
                    </div>
                } />
            
                <Route path="/rooms" element={
                    <div>
                        <h1>Rooms</h1>
                    </div>
                } />
            
                <Route path="/users" element={
                    <div>
                        <h1>Users</h1>
                    </div>
                } />
            
                <Route path="/feedbacks" element={
                    <div>
                        <h1>Feedbacks</h1>
                    </div>
                } />
            
                <Route path="/galleryitems" element={
                    <div>
                        <h1>Gallery Items</h1>
                    </div>
                } />

            </Routes>
            
        </div>
    )
}