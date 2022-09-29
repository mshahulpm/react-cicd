import { Link } from "react-router-dom";



export default function Home() {

    return (
        <>
            <h3>This React CI-CD done by shahul with github actions</h3>
            <h3>Home</h3>

            <Link to='/users' >
                users
            </Link>
            <br />
            <Link to='/books' >
                books
            </Link>
        </>
    )
}