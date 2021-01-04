import axios from "axios";

const API = {
    getBooks: function(book) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    }
    // https://www.googleapis.com/books/v1/volumes?q=harry
};

export default API;