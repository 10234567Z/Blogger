import { Link } from 'react-router-dom'
import './navbar.sass'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const user = useSelector(state => state.user.username)
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'} style={{ textDecoration: "none" }}>
                            <h1>Blogger</h1>
                        </Link>
                    </li>
                    <ul>
                        {
                            localStorage.getItem('username') ?

                                <>
                                    <li>
                                        <Link to={'/create'} style={{ textDecoration: "none" }}>
                                            <h3>Create</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/logout'} style={{ textDecoration: "none" }}>
                                            <h3>Logout</h3>
                                        </Link>
                                    </li>
                                    <li className='username'>
                                        <h3>{user}</h3>
                                    </li>   
                                </>
                                :
                                <>
                                    <li>
                                        <Link to={'/login'} style={{ textDecoration: "none" }}>
                                            <h3>Login</h3>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/signup'} style={{ textDecoration: "none" }}>
                                            <h3>Signup</h3>
                                        </Link>
                                    </li>
                                </>
                        }
                    </ul>
                </ul>
            </nav>
        </>
    )
}