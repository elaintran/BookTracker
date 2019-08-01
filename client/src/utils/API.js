import axios from "axios";

export default {
    findBooks: query => {
        return axios.get("/api/books", { params: { q: query } });
    }
}