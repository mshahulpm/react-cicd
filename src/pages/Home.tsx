import { Link } from 'react-router-dom'



export default function Home() {

    return (
        <>
            <h2>Home Page</h2>
            <Link to='/users'>Users</Link>
            <br />
            <Link to='/books'>Books</Link>
        </>
    )
}