"use strict";

const myLibrary = [];

function Book(title, author, pages, readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
}

function addBookToLibrary(title, author, pages, readYet) {
    const book = new Book(title, author, pages, readYet);
    book.id = crypto.randomUUID();
    myLibrary.push(book)
}

addBookToLibrary("Ayub's book", "Ayub Ali", 24, false);
addBookToLibrary("Miles' book", "Miles Green", 100, true);
addBookToLibrary("Dean's book", "Dean Ali", 224, true);

let displayContainer = document.querySelector(".display");

function displayBooks() {
    for (const book of myLibrary) {
        displayContainer.textContent += (book.title + book.author + book.pages + (book.readYet ? "Read" : "Not Read Yet"));
    }
}
displayBooks()

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}