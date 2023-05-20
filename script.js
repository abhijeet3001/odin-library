let myLibrary = [];
const bookContainer = document.querySelector(".book-container");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
}
function addBookCard(book) {
  let books = document.createElement("div");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let completed = document.createElement("p");
  title.textContent = "Title :  " + book.title;
  author.textContent = "Author :  " + book.author;
  pages.textContent = "No.of Pages  :  " + book.pages;
  completed.textContent = "Completed :  " + book.isRead ? "Yes" : "No";
  books.appendChild(title);
  books.appendChild(author);
  books.appendChild(pages);
  books.appendChild(completed);
  books.classList.add("book-card");
  bookContainer.appendChild(books);
}
function addBookToDisplay(){
  myLibrary.forEach((book) => addBookCard(book));
}
