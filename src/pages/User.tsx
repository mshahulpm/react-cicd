import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../contsnts";





export default function Users() {

    const [data, setData] = useState([] as any[])

    useEffect(() => {
        axios.get(baseUrl + '/books')
            .then(({ data }) => setData(data))
            .catch(console.log)
    }, [])


    return (
        <>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/books'>Books</Link>

            <h2>users Page</h2>
            {data.map(d => (
                <li key={d._id}>{JSON.stringify(d)}</li>
            ))}
        </>
    )
}