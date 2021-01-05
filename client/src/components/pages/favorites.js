import React, { useState, useEffect } from "react";
import Header from "../Header/header";
import API from "../../utils/API";
import Column from "../Column/Column";
import FavoriteCard from "../FavoriteCard/FavoriteCard";
// import Button from "../Button/Button";
import NavBar from "../Nav/nav";

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
            <NavBar />
            <div>
                <Header>
                    <h1>Favorites List</h1>
                    <h5>Below are books marked as favorites!</h5>
                </Header>
            </div>

            <Column size="md-10">
                {books.map(info => {
                    return(
                        <div>
                        <FavoriteCard refresh={getFavoriteBooks} book={info} key={info.id}>
                        {/* <Button className="btn btn-warning">Testing</Button> */}
                        </FavoriteCard>
                        
                        </div>)
                })}
            </Column>
        </div>
    )
}

export default Favorites;