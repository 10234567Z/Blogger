import { Link, useRouteError } from "react-router-dom"

export default function Error(){
    const error = useRouteError()
    console.log(error)
    return(
        <div>
            <h1>An error seemed to happen</h1>
            <Link to={'/'}>Go Back to home</Link>
        </div>
    )
}