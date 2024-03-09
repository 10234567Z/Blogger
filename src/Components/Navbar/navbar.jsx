import { Link } from 'react-router-dom'
import './navbar.sass'

export default function Navbar() {
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
                                        <Link to={'/logout'} style={{ textDecoration: "none" }}>
                                            <h3>Logout</h3>
                                        </Link>
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