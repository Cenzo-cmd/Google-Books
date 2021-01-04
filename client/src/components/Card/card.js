import React from "react";
import "./card.css";

function Card(props) {
    console.log("this is the props", props);
    const bookInfo = props.book.volumeInfo;
    return(
        <div className="card mainCard">
        <div className="card-body card-cont">
            <h3>{`${bookInfo.title} - By: ${bookInfo.authors} `}</h3>
            <img src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title}></img>
            <p>{bookInfo.description}</p>
            <a href={bookInfo.infoLink} target="_blank">Visit Website</a>
            {/* <p className="card-text">Cell: {props.book.cell}</p> */}
            {/* <p className="card-text">{`Location: ${props.book.location.city}, ${props.book.location.state}`}</p> */}

        </div>
    </div>
    )
}

export default Card;