import { useEffect, useState } from 'react'
import Navbar from '../Navbar/navbar'
import styles from './create.module.sass'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { fetchUser } from '../../Reducers/userReducer'
import { useDispatch } from 'react-redux'

export default function Create() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [publish, setPublish] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        async function fetch() {
            const token = localStorage.getItem('token')
            if (token) {
                dispatch(fetchUser(token))
            }
            else {
                navigate('/login')
            }
        }
        fetch()
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            title: title,
            text: content,
            public: publish
        }
        axios.post(`${import.meta.env.VITE_URL}/blogs`, data,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            })
            .then(res => {
                console.log(res)
                navigate('/')
            })
    }
    return (
        <>
            <Navbar />
            <main className={styles.main}>
                <h3>Create Your Own Blog Below!</h3>
                <form method='POST' onSubmit={handleSubmit} className={styles.create}>
                    <div style={{ width: "75%" }}>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required minLength={1} value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div>
                        <label htmlFor="content">Content</label>
                        <textarea id="content" rows={20} cols={120} name="text" required minLength={100} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <div className={styles.publish}>
                        <label htmlFor='public'>Publish</label>
                        No <input type='radio' id='no' name='public' value={publish} onChange={(e) => setPublish(false)} required />
                        Yes <input type='radio' id='yes' name='public' value={publish} onChange={(e) => setPublish(true)} />
                    </div>
                    <button type="submit">Create</button>
                </form>
            </main>
        </>
    )
}