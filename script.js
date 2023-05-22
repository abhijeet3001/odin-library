let myLibrary = [];
let bookCount = 0;
const bookContainer = document.querySelector(".book-container");
const bookForm = document.querySelector(".addCard");
const addButton = document.querySelector(".add-book");

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  bookCount++;
  displayBook(newBook);
}

function displayBook(book) {
  let books = document.createElement("div");
  let title = document.createElement("p");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let completed = document.createElement("p");
  let removeButton = document.createElement("button");
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  completed.textContent = book.isRead ? "Yes" : "No";
  removeButton.textContent = "Remove Book";
  removeButton.classList.add("remove-book");
  removeButton.addEventListener("click", removeBook);
  books.appendChild(title);
  books.appendChild(author);
  books.appendChild(pages);
  books.appendChild(completed);
  books.appendChild(removeButton);
  books.classList.add("book-card");
  books.setAttribute("book-no", bookCount);
  bookContainer.insertBefore(books, bookForm);
}
function addBookToDisplay() {
  myLibrary.forEach((book) => displayBook(book));
}

function updateAttributes(index) {
  let bookElements = document.querySelectorAll("[book-no]");
  bookElements.forEach((bookElement) => {
    let currentIndex = bookElement.getAttribute("book-no");
    if (currentIndex > index) {
      bookElement.setAttribute("book-no", currentIndex - 1);
    }
  });
}
function removeBook(e) {
  index = e.target.parentElement.getAttribute("book-no");
  myLibrary.splice(index, 1);
  bookCount--;
  let toRemove = document.querySelector(`[book-no = '${index}']`);
  bookContainer.removeChild(toRemove);
  updateAttributes(index);
}

bookForm.addEventListener("submit", (e) => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("isComplete");
  addBookToLibrary(title.value, author.value, pages.value, read.value);
  hide();
  e.preventDefault();
});

function hide() {
  bookForm.classList.toggle("hide");
  addButton.classList.toggle("hide");
}
