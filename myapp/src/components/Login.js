import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Login(){
    const navigate = useNavigate();
    const authentaicte = ()=>{
        navigate('/dashboard');
    }
    return(
        <>
        <div>
            <h1>Login Here </h1>
            <button onClick={authentaicte}>Login
                
            </button>
        </div>
        </>
    )
}