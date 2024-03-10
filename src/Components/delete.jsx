import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Delete() {
    const navigate = useNavigate()
    const { blogid } = useParams()
    useEffect(() => {
        async function Del() {
            axios.delete(`${import.meta.env.VITE_URL}/blogs/${blogid}`, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
                .then(res => {
                    console.log(res)
                    navigate('/')
                })
        }
        Del()
    }, [])

    return <></>
}