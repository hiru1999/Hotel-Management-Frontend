export default function TestComponent(){

    let num = 0;

    return(

        <div className="bg-blue-950 w-full h-[100vh] flex justify-center items-center">
            <div className="bg-white w-[350px] h-[350px] flex justify-center items-center">
                <button className="w-[60px] h-[60px] bg-blue-500 rounded-full text-2xl text-white text-center">
                    -
                </button>
                <span className="text-6xl ml-5 mr-5">
                    {num}
                </span>
                <button className="w-[60px] h-[60px] bg-blue-500 rounded-full text-2xl text-white text-center"
                onClick={
                    ()=>{
                        alert("Plus button clicked")
                    }
                }>
                    +
                </button>
                
            </div>
        </div>

    )
}