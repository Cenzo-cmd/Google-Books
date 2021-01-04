import React from "react";
// import "./card.css";
import Button from "../Button/Button";
import API from "../../utils/API";

function FavoriteCard(props) {
    console.log("this is the props", props);
    

    // function addToFavorites(event) {
    //     console.log("%%%%%%%%%%", props);
    //     API.saveBook({
    //         title: bookInfo.title,
    //         author: bookInfo.authors,
    //         description: bookInfo.description,
    //         image: bookInfo.imageLinks.thumbnail,
    //         link: bookInfo.infoLink
    //     }).then(() => {
    //         console.log("success")
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    return(
        <div className="card mainCard">
        <div className="card-body card-cont" >
            <h3>{`${props.book.title} - By: ${props.book.author} `}</h3>
            <img src={props.book.image} alt={props.book.title}></img>
            <p>{props.book.description}</p>
            <a href={props.book.link} rel="noreferrer" target="_blank">Visit Website</a>
            {/* <Button onClick={addToFavorites} value={props.book.id}>Add To Favorites</Button> */}
            {/* <p className="card-text">Cell: {props.book.cell}</p> */}
            {/* <p className="card-text">{`Location: ${props.book.location.city}, ${props.book.location.state}`}</p> */}

        </div>
    </div>
    )
}

export default FavoriteCard;