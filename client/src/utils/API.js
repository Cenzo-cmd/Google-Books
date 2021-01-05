import axios from "axios";

const API = {
    getBooks: function(book) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getFavorites: function() {
        return axios.get("/api/favorites");
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
    // https://www.googleapis.com/books/v1/volumes?q=harry
};

export default API;