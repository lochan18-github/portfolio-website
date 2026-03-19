const axios = require("axios");

// Get all books
async function getAllBooks() {
  const response = await axios.get("http://localhost:5000/");
  console.log(response.data);
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  const response = await axios.get(`http://localhost:5000/isbn/${isbn}`);
  console.log(response.data);
}

// Get books by Author
async function getBooksByAuthor(author) {
  const response = await axios.get(
    `http://localhost:5000/author/${author}`
  );
  console.log(response.data);
}

// Get books by Title
async function getBooksByTitle(title) {
  const response = await axios.get(
    `http://localhost:5000/title/${title}`
  );
  console.log(response.data);
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle,
};
