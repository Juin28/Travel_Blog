import React from "react"
import "./Header.css"

export default function Headers() {
    return (
        <div className="header">
            <img src="https://cdn-icons-png.flaticon.com/128/761/761488.png" alt="travel-icon" className="header--travel-icon"/>
            <h3 className="header--title">My Travel Journal</h3>
            <img src="https://cdn-icons-png.flaticon.com/128/10732/10732652.png" alt="travel-icon" className="header--travel-icon"/>
        </div>
    )
}