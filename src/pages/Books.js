import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants'

function Books() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(baseUrl + '/books')
            .then(({ data }) => {
                setBooks(data)
            }).catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <>
            <h3>Books</h3>
            <Link to='/'>home</Link>
            <br />
            <Link to='/users'>users</Link>
            <br />
            {
                books.map((book, i) => (
                    <li style={{ margin: '20px' }} key={i}>{JSON.stringify(book)}</li>
                ))
            }
        </>
    )
}

export default Books