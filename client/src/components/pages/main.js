import React, { useState } from "react";

import Header from "../Header/header";
import Button from "../Button/Button";
import Column from "../Column/Column";
import API from "../../utils/API";
import Card from "../Card/card";

function Main() {
     const [books, setBooks] = useState([]);
    const [searchBoxText, setSearchBoxText] = useState("");
    console.log("this is the books", books)
    
    console.log("this is the search", searchBoxText);

    function handleBookChange(event) {
        const { value } = event.target;
        setSearchBoxText(value);
    }

    function handleBookSearch(event) {
        event.preventDefault();
        console.log("name of book", searchBoxText)
        API.getBooks(searchBoxText).then(result => {
            console.log(result);
            setBooks(result.data.items)
         
        })
        
    }

    return(
        <div>
             <Header>
                <h1>Google Book Search</h1>
                <h5>Enter a book below to search!</h5>
            </Header>
            <Column size="md-10">
            <div>
            <form>
                <input className="form-control" placeHolder="Enter a book to search" onChange={handleBookChange}></input>
                
                <Button disabled={!(searchBoxText)} onClick={handleBookSearch}>Search</Button>
                
            </form>
            </div>
            </Column>

            <Column size="md-10">
            {books.map(info => {
                console.log("###########", info.id)
                return(
                <Card book={info} key={info.id}/>
                )
            })}
            </Column>
        </div>
    )
}

export default Main