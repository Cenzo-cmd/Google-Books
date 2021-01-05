import React from "react";
// import "./card.css";
import Button from "../Button/Button";
import API from "../../utils/API";

function FavoriteCard(props) {
    console.log("this is the props", props);
    
    function removeFromFav(event) {
        const id = event.target.value;
        API.deleteBook(id).then(result => {
            console.log(result);
            props.refresh();
        })
    }

    return(
        <div className="card mainCard">
        <div className="card-body card-cont" >
            <h3>{`${props.book.title} - By: ${props.book.author} `}</h3>
            <img src={props.book.image} alt={props.book.title}></img>
            <p>{props.book.description}</p>
            <a href={props.book.link} rel="noreferrer" target="_blank">Visit Website</a>
            <Button className="btn btn-danger" onClick={removeFromFav} value={props.book._id}>Remove from Favorites</Button>
        </div>
    </div>
    )
}

export default FavoriteCard;