import React from "react"
import "./Card.css"

export default function Card (props) {
    return (
        <>
            <div className="card">
                <img src={props.imageUrl} className="card--image"/>

                <div className="card--information">
                    <div className="card--top">
                        <div className="card--location">
                            <img src="https://cdn-icons-png.flaticon.com/128/14831/14831599.png" className="card--location-icon"/>
                            <h4 className="card--location-country">{props.country}</h4>
                            <span className="card--location-googleMaps"><a href={props.googleMapsUrl} className="card--location-googleMaps">View on Google Maps</a></span>
                        </div>

                        <h3 className="card--ratings">Ratings: {props.rating}</h3>
                    </div>
                    
                    <h2 className="card--spot">{props.title}</h2>
                    <h3 className="card--date">{props.startDate} - {props.endDate}</h3>
                    <p className="card--description">{props.description}</p>
                </div>

            </div>
            {!props.last && <hr></hr> }
        </>
    )
}