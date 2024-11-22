import Header from "./components/header"
import './App.css';
import HomePage from "./pages/client-page/homePage";
import AdminPage from "./pages/admin-page/adminPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/admin/*" element={<AdminPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
