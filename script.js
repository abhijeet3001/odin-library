let myLibrary = [];
const bookContainer = document.querySelector(".book-container");
const bookForm= document.querySelector(".addCard");
const addButton=document.querySelector(".add-book");


function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}
function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  displayBook(newBook);
}
function displayBook(book) {
  let books = document.createElement("div");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let completed = document.createElement("p");
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  completed.textContent = book.isRead ? "Yes" : "No";
  books.appendChild(title);
  books.appendChild(author);
  books.appendChild(pages);
  books.appendChild(completed);
  books.classList.add("book-card");
  bookContainer.insertBefore(books,bookForm);
}
function addBookToDisplay() {
  myLibrary.forEach((book) => displayBook(book));
}
bookForm.addEventListener('submit',(e)=>{
  const title=document.getElementById('title');
  const author=document.getElementById('author');
  const pages=document.getElementById('pages');
  const read=document.getElementById('isComplete');
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  hide();
  e.preventDefault();
})
function hide(){
  bookForm.classList.toggle("hide");
  addButton.classList.toggle("hide");
}