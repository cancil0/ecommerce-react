import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = ({token}) =>{
    const navigate = useNavigate();

    useEffect(() => {
        if(token){
            navigate('/home');
        }else{
            navigate('/login');
        }
    }, [navigate, token])
    
}

export default Redirect;