import axios from "axios";

export default {
    findBooks: query => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    }
}