import Header from "./components/header"
import './App.css';
import HomePage from "./pages/client-page/homePage";
import AdminPage from "./pages/admin-page/adminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import CategoriesPage from "./pages/client-page/categories";
import RoomsPage from "./pages/client-page/rooms";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/categories" element={<CategoriesPage/>}/>
          <Route path="/rooms" element={<RoomsPage/>}/>
          <Route path="/*" element={<HomePage/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
