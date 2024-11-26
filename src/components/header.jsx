import UserTag from "./userdata";

function Header(){
    return(
        <header className="w-full bg-blue-500 flex h-[100px] relative items-center p-[10px]">
            <h1 className="text-white text-[30px]">Leonine villa</h1>
            <UserTag imageLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnS1o3mO3S_Nkfw1WAGaRJ6KaOGgODpfoOsA&s" name="Ann fernando"/>
        </header>
    )
}

export default Header;