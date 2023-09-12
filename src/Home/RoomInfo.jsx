import React from 'react'
import { Link } from 'react-router-dom'

function RoomInfo() {
    return (
        <div>RoomInfo
            <Link to="/customerInfo">Previous</Link>
            <Link to="/totalCost">Next</Link>
        </div>
    )
}

export default RoomInfo