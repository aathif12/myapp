import { Navigate, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

export default function Login(){
    const navigate = useNavigate();
    const authenticate = ()=>{
        navigate('/dashboard');
    }

    const usernameCheck = ()=>{
                
    }
    return(
        <>
        <div>
            <h1>Login Here </h1>
            <form>
            <input type="text" name="username" 
            ></input><br/><br/>
            <input type="password" name="pass"></input><br/><br/>
            <button onClick={authenticate}>Login
           
            </button>
            </form>
        </div>
        </>
    )
}