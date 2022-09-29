

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '../constants'

function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(baseUrl + '/users')
            .then(({ data }) => {
                setUsers(data)
            }).catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <>
            <h3>Users</h3>
            <Link to='/'>home</Link>
            <br />
            <Link to='/books'>books</Link>
            <br />
            {
                users.map((usr, i) => (
                    <li style={{ margin: '20px' }} key={i}>{JSON.stringify(usr)}</li>
                ))
            }
        </>
    )
}

export default Users