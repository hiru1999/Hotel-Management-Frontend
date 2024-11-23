import "./login.css"

export default function LoginPage(){
    return(

        <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
                <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative">
                    <h1 className="text-3xl p-[15px] text-white text-center absolute top-[40px]">Login</h1>
                    <input type="text" placeholder="Enter your email" className="w-[80%] h-[40px] bg-[#00000000] border-[2px] text-white placeholder:text-white px-[5px] rounded-md mb-[20px]"/>
                    <input type="password" placeholder="Enter your password" className="w-[80%] h-[40px] bg-[#00000000] border-[2px] text-white placeholder:text-white px-[5px] rounded-md"/>
                    <button className="w-[80%] bg-red-500 text-white h-[50px] rounded-md absolute bottom-[40px]">
                        Login
                    </button>
                </div>
        </div>

    )
}