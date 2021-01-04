import React from "react";
import "./card.css";
import Button from "../Button/Button";
import API from "../../utils/API";

function Card(props) {
    console.log("this is the props", props);
    const bookInfo = props.book.volumeInfo;

    function addToFavorites(event) {
        console.log("%%%%%%%%%%", props);
        API.saveBook({
            title: bookInfo.title,
            author: bookInfo.authors,
            description: bookInfo.description,
            image: bookInfo.imageLinks.thumbnail,
            link: bookInfo.infoLink
        }).then(() => {
            console.log("success")
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <div className="card mainCard">
        <div className="card-body card-cont" >
            <h3>{`${bookInfo.title} - By: ${bookInfo.authors} `}</h3>
            <img src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title}></img>
            <p>{bookInfo.description}</p>
            <a href={bookInfo.infoLink} rel="noreferrer" target="_blank">Visit Website</a>
            <Button onClick={addToFavorites} value={props.book.id}>Add To Favorites</Button>
            {/* <p className="card-text">Cell: {props.book.cell}</p> */}
            {/* <p className="card-text">{`Location: ${props.book.location.city}, ${props.book.location.state}`}</p> */}

        </div>
    </div>
    )
}

export default Card;