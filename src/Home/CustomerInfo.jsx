import React from 'react'
import { Link } from 'react-router-dom'

function CustomerInfo() {
    return (
        <div>CustomerInfo
            <Link to="/">Previous</Link>
            <Link to="/roomInfo">Next</Link>

        </div>
    )
}

export default CustomerInfo