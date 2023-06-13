// Data Structures

class Book {
  constructor(title, author, pages, isReaded) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isReaded = isReaded;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.getBook(newBook.title)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }
}

const library = new Library();

// UI

const openAddBookModalBtn = document.getElementById("openAddBookModalBtn");
const overlay = document.getElementById("overlay");

const addBookForm = document.getElementById("addBookForm");
const addBookModal = document.getElementById("addBookModal");
const addBookBtn = document.getElementById("addBookBtn");

const bookList = document.getElementById("bookList");

function openAddBookModal() {
  addBookForm.reset();
  addBookModal.classList.add("active");
  overlay.classList.add("active");
}

function closeAddBookModal() {
  addBookModal.classList.remove("active");
  overlay.classList.remove("active");
}

const updateBookList = () => {
  resetBookList();
  for (let book of library.books) {
    createBookCard(book);
  }
};

const resetBookList = () => {
  bookList.innerHTML = "";
};

const createBookCard = (book) => {
  const bookCard = document.createElement("div");
  const title = document.createElement("h4");
  const author = document.createElement("em");
  const pages = document.createElement("p");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.classList.add("card");
  title.classList.add("book-title");
  readBtn.classList.add("btn", "book-btn");
  removeBtn.classList.add("btn", "book-btn");
  readBtn.onclick = toggleRead;
  removeBtn.onclick = removeBook;

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = "Remove";

  if (book.isReaded) {
    readBtn.textContent = "Readed";
    readBtn.classList.add("book-btn-light-green");
  } else {
    readBtn.textContent = "Not Readed";
    readBtn.classList.add("book-btn-light-red");
  }

  bookCard.appendChild(author);
  bookCard.appendChild(title);
  bookCard.appendChild(pages);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(removeBtn);
  bookList.appendChild(bookCard);
};

const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isReadedCheck = document.getElementById("isReadedCheck").checked;
  return new Book(title, author, pages, isReadedCheck);
};

const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();

  library.addBook(newBook);
  saveLocal();
  updateBookList();

  closeAddBookModal();
};

const removeBook = (e) => {
  const title = e.target.parentNode.childNodes[1].innerText.replaceAll('"', "");

  library.removeBook(title);

  saveLocal();
  updateBookList();
};

const toggleRead = (e) => {
  const title = e.target.parentNode.childNodes[1].innerText.replaceAll('"', "");
  const book = library.getBook(title);

  book.isReaded = !book.isReaded;

  saveLocal();
  updateBookList();
};

openAddBookModalBtn.addEventListener("click", openAddBookModal);
overlay.addEventListener("click", closeAddBookModal);
addBookForm.onsubmit = addBook;

// Local Storage

const saveLocal = () => {
  localStorage.setItem("library", JSON.stringify(library.books));
};

const restoreLocal = () => {
  const books = JSON.parse(localStorage.getItem("library"));
  if (books) {
    library.books = books.map((book) => JSONToBook(book));
  } else {
    library.books = [];
  }
};

window.addEventListener("DOMContentLoaded", () => {
  restoreLocal();
  updateBookList();
});

// Utils

const JSONToBook = (book) => {
  return new Book(book.title, book.author, book.pages, book.isReaded);
};
