let myLibrary = [];
let bookCount = 5;

const bookContainer = document.querySelector(".book-container");
const addBookForm = document.querySelector(".addCard");
const addBookButton = document.querySelector(".add-book");
const removeBookButton = document.querySelectorAll(".remove-book");

// Initialize constructor
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
  let bookCard = document.createElement("div");

  const title = makeChildElement("p", book.title);
  const author = makeChildElement("p", book.author);
  const pages = makeChildElement("p", book.pages);
  const isRead = makeChildElement("p", book.isRead ? "Yes" : "No");

  const removeButton = makeChildElement("button", "Remove Book");
  removeButton.addEventListener("click", removeBook);

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(isRead);
  bookCard.appendChild(removeButton);

  bookCard.classList.add("book-card");
  bookCard.setAttribute("data-book-no", bookCount);
  bookContainer.insertBefore(bookCard, addBookForm);
}

function makeChildElement(tag, text) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

function updateAttributes(index) {
  let bookElements = document.querySelectorAll("[data-book-no]");
  bookElements.forEach((bookElement) => {
    let currentIndex = bookElement.getAttribute("data-book-no");
    if (currentIndex > index) {
      bookElement.setAttribute("data-book-no", currentIndex - 1);
    }
  });
}

function removeBook(e) {
  index = e.target.parentElement.getAttribute("data-book-no");
  myLibrary.splice(index, 1);
  bookCount--;
  let bookCardToRemove = document.querySelector(`[data-book-no = "${index}"]`);
  bookContainer.removeChild(bookCardToRemove);
  updateAttributes(index);
}

function toggleFormVisibility() {
  addBookForm.classList.toggle("hide");
  addBookButton.classList.toggle("hide");
}

addBookForm.addEventListener("submit", (e) => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("isComplete").value === "true";
  addBookToLibrary(title.value, author.value, pages.value, read);
  toggleFormVisibility();
  e.preventDefault();
});

addBookButton.addEventListener("click", toggleFormVisibility);
function addBooksToDisplay() {
  myLibrary.forEach((book) => displayBook(book));
}

removeBookButton.forEach(btn => btn.addEventListener("click", removeBook));