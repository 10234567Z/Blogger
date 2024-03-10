import { useSelector } from "react-redux";
import commentImage from "/comment.svg";
import "./blogs.sass";
import style from "./blogs.module.sass";
import { Link } from "react-router-dom";
import deleteImg from '../../assets/delete.svg'
import editImg from '../../assets/edit.svg'

export default function Main() {
    const user = useSelector((state) => state.user);
    return (
        <>
            <ul className={style.ul}>
                {
                    user.blogs.length === 0 ? <h1>...</h1> :
                        user.blogs.map((blog, index) => {
                            return (
                                <div className="blogContainer" key={blog._id}>
                                    <h3>{blog.title}</h3>
                                    <div className="infBlog">
                                        <div className="comments">
                                            <img src={commentImage} alt="comments" height="25px" width="25px" />
                                            <p>{blog.comments.length}</p>
                                        </div>
                                        <Link to={`/blogs/${blog._id}`} style={{ textDecoration: "none" }}>
                                            <img src={deleteImg} alt="delete" height="25px" width="25px" />
                                        </Link>
                                        <Link to={`/edit/${blog._id}`} style={{ textDecoration: "none" }}>
                                            <img src={editImg} alt="edit" height="25px" width="25px" />
                                        </Link>
                                    </div>
                                </div>

                            )
                        })
                }
            </ul>
        </>
    );
}