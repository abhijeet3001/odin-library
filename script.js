let myLibrary = [];
let bookCount = 0;

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

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
  return this.isRead;
};

function addBookToLibrary(title, author, pages, isRead) {
  let newBook = new Book(title, author, pages, isRead);
  myLibrary.push(newBook);
  bookCount++;
  displayBook(newBook);
}

function displayBook(book) {
  let bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  bookCard.setAttribute("data-book-no", bookCount);

  const title = makeChildElement("p", book.title);
  const author = makeChildElement("p", book.author);
  const pages = makeChildElement("p", book.pages);
  const removeButton = makeChildElement("button", "Remove Book");
  const toggleComplete = makeChildElement(
    "button",
    (book.isRead ? " " : "Not") + " Completed"
  );

  removeButton.classList.add("btn-remove");
  toggleComplete.classList.add("btn-read");
  toggleComplete.style.backgroundColor = book.isRead
    ? "var(--green)"
    : "var(--red)";

  removeButton.onclick = removeBook;
  toggleComplete.onclick = toggleCompleteStatus;

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  bookCard.appendChild(toggleComplete);
  bookCard.appendChild(removeButton);

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

function toggleCompleteStatus(e) {
  index = e.target.parentElement.getAttribute("data-book-no");
  const currentReadStatus = myLibrary[index - 1].toggleRead();
  e.target.style.backgroundColor = currentReadStatus
    ? "var(--green)"
    : "var(--red)";
  e.target.textContent = (currentReadStatus ? "" : "Not") + " Completed";
}
function toggleFormVisibility() {
  addBookForm.classList.toggle("hide");
  addBookButton.classList.toggle("hide");
}

addBookForm.addEventListener("submit", (e) => {
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("isComplete").checked;
  addBookToLibrary(title.value, author.value, pages.value, read);
  toggleFormVisibility();
  e.preventDefault();
});

addBookButton.addEventListener("click", toggleFormVisibility);
function addBooksToDisplay() {
  myLibrary.forEach((book) => displayBook(book));
}

addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
addBookToLibrary("1984", "George Orwell", 328, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 432, true);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 224, false);
