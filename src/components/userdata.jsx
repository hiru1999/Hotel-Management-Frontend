import axios from "axios";
import { useEffect, useState } from "react";

function UserTag(props){

    const [name, setName] = useState("")

    const token = localStorage.getItem("token")


    
    //useEffect(function,[])
    useEffect(
        ()=>{
            if(token!=null){
                axios.get(import.meta.env.VITE_BACKEND_URL + "/api/users/",
                    {
                        headers : {
                            Authorization : "Bearer " + token,
                            "Content-Type" : "application/json"
                        }
                    }
                ).then(
                    (res)=>{
                        console.log(res);
                        setName(res.data.user.firstName + " " + res.data.user.lastName);
                    }
                )
            }
        },[]
    );

    
    return(
        <div className="absolute right-0 flex items-center  cursor-pointer mr-2">
            <img className="rounded-full w-[75px] h-[75px]" src={props.imageLink} />
            <span className="text-white ml-[5px] text-xl">{name}</span>
            <button onClick={
                ()=>{
                    localStorage.removeItem("token")
                    const token = localStorage.getItem("token")
                    console.log(token)
                }
            }>
                logout
            </button>
        </div>
    )
}

export default UserTag;