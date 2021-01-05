import React, { useState } from "react";
import "./card.css";
import Button from "../Button/Button";
import API from "../../utils/API";

function Card(props) {
    console.log("this is the props", props);
    const bookInfo = props.book.volumeInfo;

    const [clicked, setClicked] = useState(false);

    function addToFavorites(event) {
        API.saveBook({
            title: bookInfo.title,
            author: bookInfo.authors,
            description: bookInfo.description,
            image: bookInfo.imageLinks.thumbnail,
            link: bookInfo.infoLink
        }).then(() => {
            console.log("success");
            setClicked(true);
        }).catch(err => {
            console.log(err);
        })
    }
    return(
        <div className="card mainCard">
        <div className="card-body card-cont" >
            <h3>{`${bookInfo.title} - By: ${bookInfo.authors} `}</h3>
            <img src={bookInfo.imageLinks?.thumbnail} alt={bookInfo.title}></img>
            <p>{bookInfo.description}</p>
            <a href={bookInfo.infoLink} rel="noreferrer" target="_blank">Visit Website</a>
            <Button onClick={addToFavorites} disabled={clicked} className="btn btn-success" value={props.book.id}>Add To Favorites</Button>

        </div>
    </div>
    )
}

export default Card;