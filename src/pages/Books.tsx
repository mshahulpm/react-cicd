import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../contsnts";





export default function Books() {

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
            <Link to='/users'>Users</Link>
            <br />
            <h2>Books </h2>
            {data.map(d => (
                <li key={d._id}>{JSON.stringify(d)}</li>
            ))}

        </>
    )
}