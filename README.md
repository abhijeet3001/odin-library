# Library Project

This is a JavaScript project that demonstrates the usage of objects, constructors, and prototypal inheritance to create a library for storing books.

## Project Overview

The Library project focuses on creating a web application that allows users to add books to their library and keep track of their reading progress. The project utilizes JavaScript's object-oriented programming features to organize the book data and apply prototypal inheritance for shared functionality.

## Features

- __Book Constructor__: The project includes a Book constructor function that takes parameters such as title, author, pages, and isRead status. This constructor is used to create book objects.

- __Object Storage__: The project utilizes an array called __'myLibrary'__ to store the book objects created using the Book constructor. Books can be added, removed, and their reading status can be toggled.

- __Prototypal Inheritance__: The Book constructor's prototype is extended with a __'toggleRead'__ method to allow users to toggle the read status of a book.

- __User Interface__: The project includes an HTML interface with forms and buttons to add books, display the library, and interact with individual books.
