import axios from "axios";

export default {
  //api/books get
  getBooks: function() {
    return axios.get("/api/books");
  },
  //api/books post
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  //api/books/:id (delete) 
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }, 
  //single HTML page
  getPage: function() {
    return axios.get("client/build/index.html");
  }
};