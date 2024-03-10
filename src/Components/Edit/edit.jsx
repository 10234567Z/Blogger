import styles from '../Create/create.module.sass'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios'
import Navbar from '../Navbar/navbar'
import loadingGif from '../../assets/loading.svg'

export default function Edit() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [publish, setPublish] = useState(false)
    const [loading, setLoading] = useState(true)
    const { blogid } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function FetchBlog() {
            const res = await axios.get(`${import.meta.env.VITE_URL}/blogs/${blogid}`)
            setTitle(res.data.blog.title)
            setContent(res.data.blog.text)
            setPublish(res.data.blog.public)
            setLoading(false)
        }
        FetchBlog()
    }, [])
    const handleEdit = (e) => {
        e.preventDefault()
        const data = {
            title: title,
            text: content,
            public: publish
        }
        axios.put(`${import.meta.env.VITE_URL}/blogs/${blogid}`, data,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            })
            .then(res => {
                navigate('/')
            })
    }

    return (
        <>
            {
                loading ?
                    <img src={loadingGif} alt="loading" />
                    :
                    <>
                        <Navbar />
                        <main className={styles.main}>
                            <h3>Edit your blog</h3>
                            <form method='POST' onSubmit={handleEdit} className={styles.create}>
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
                                    {
                                        publish ?
                                            <>
                                                No <input type='radio' id='no' name='public' value={publish} onChange={(e) => setPublish(false)} required />
                                                Yes <input type='radio' id='yes' name='public' value={publish} onChange={(e) => setPublish(true)} checked />
                                            </>
                                            :
                                            <>
                                                No <input type='radio' id='no' name='public' value={publish} onChange={(e) => setPublish(false)} required checked />
                                                Yes <input type='radio' id='yes' name='public' value={publish} onChange={(e) => setPublish(true)} />
                                            </>
                                    }
                                </div>
                                <button type="submit">Edit</button>
                            </form>
                        </main>
                    </>
            }
        </>
    )
}