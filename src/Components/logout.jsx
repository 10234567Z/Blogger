import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../Reducers/userReducer";

export default function Logout(){
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        dispatch(removeUser())
        navigate('/')
    }, [navigate])

    return <></>
}