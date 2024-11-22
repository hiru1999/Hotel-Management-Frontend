import UserTag from "./userdata";
import "./header.css";

function Header(){
    return(
        <header>
            <h1 className="text-yellow-400">Hotel management system</h1>
            <UserTag imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s" name="Hiruvi Senadheera"/>
        </header>
    )
}

export default Header;