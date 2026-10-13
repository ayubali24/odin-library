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
const myTable = document.getElementById("myTable");
const tbody = myTable.createTBody();



function displayBooks2() {
    for (const book of myLibrary) {
        const row = document.createElement("tr");
        
        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");

        cell1.textContent = book.title;
        cell2.textContent = book.author;
        cell3.textContent = book.pages;
        cell4.textContent = book.readYet ? "Yes" : "No";


        // 4. Append row to tbody
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        tbody.appendChild(row);
    }
}

displayBooks2()

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const form = document.querySelector("#myForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    addBookToLibrary(entries.title, entries.author, entries.pages, entries.readYet == 'yes' ? true: false)
    const tbody = document.querySelector("tbody");
    tbody.replaceChildren();
    // table.replaceChildren();
    displayBooks2()
})

