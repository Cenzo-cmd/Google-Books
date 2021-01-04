import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import API from "../../utils/API";
import Column from "../Column/Column";
import FavoriteCard from "../FavoriteCard/FavoriteCard";

function Favorites() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getFavoriteBooks()
    }, []);

    console.log("these are the books", books)

    function getFavoriteBooks() {
        API.getFavorites().then(result => {
            setBooks(result.data);
        }).catch(err => {
            console.log(err);
        })
    }

    return(
        <div>
            <div>
                <Header>
                    <h1>Favorites List</h1>
                    <h5>Below are books marked as favorites!</h5>
                </Header>
            </div>

            <Column size="md-10">
                {books.map(info => {
                    console.log("###########", info);
                    return(
                        <FavoriteCard book={info} key={info.id}/>
                         )
                })}
            </Column>
        </div>
    )
}

export default Favorites;