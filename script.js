"use strict";

const myLibrary = [];

function Book(title, author, pages, readYet) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readYet = readYet;
}

Book.prototype.changeReadStatus = function() {
    this.readYet = !(this.readYet)
}

function addBookToLibrary(title, author, pages, readYet) {
    const book = new Book(title, author, pages, readYet);
    book.id = crypto.randomUUID();
    myLibrary.push(book)
}

const myTable = document.getElementById("myTable");
const tbody = myTable.createTBody();



function displayBooks() {
    tbody.replaceChildren();

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
        const myDeleteButton = document.createElement('button');
        const changeReadStatusButton = document.createElement('button');

        myDeleteButton.innerText = "Delete Book";
        changeReadStatusButton.innerText = "Change Read Status";

        // if (myLibrary.length !== 0 && myLibrary.length <= 1) {
        //     const header = document.getElementById("header");
        //     console.log(header)
        //     const cell6 = document.createElement("th");

        //     cell6.textContent = "Actions";
        //     header.appendChild(cell6);
        //     console.log("hi", header);
        // }
      
        
        const cell5 = document.createElement("td");
        cell5.appendChild(myDeleteButton);
        cell5.appendChild(changeReadStatusButton);


        myDeleteButton.addEventListener('click', () => {
            removeObjectWithId(myLibrary, book.id)
            displayBooks()
        });
        changeReadStatusButton.addEventListener('click', () => {
            book.changeReadStatus()
            displayBooks()
        })
        // row.appendChild(myDeleteButton);
        // row.appendChild(changeReadStatusButton);
        row.appendChild(cell5);
        tbody.appendChild(row);
    }
}

function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    if (objWithIdIndex !== -1) {
        arr.splice(objWithIdIndex, 1);
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

const form = document.querySelector(".form-container")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    addBookToLibrary(entries.title, entries.author, Number(entries.pages), entries.readYet === 'yes')
    // table.replaceChildren();
    displayBooks()
})

