const openAddBookModalBtn = document.getElementById("openAddBookModalBtn");

const addBookModal = document.getElementById("addBookModal");
const addBookMsg = document.getElementById("addBookMsg");
const addBookBtn = document.getElementById("addBookBtn");

const overlay = document.getElementById("overlay");

openAddBookModalBtn.addEventListener("click", openAddBookModal);
overlay.addEventListener("click", closeAddBookModal);

addBookBtn.addEventListener("click", () => {
  console.log("ola");
  closeAddBookModal();
});

function openAddBookModal() {
  addBookModal.classList.add("active");
  overlay.classList.add("active");
}

function closeAddBookModal() {
  addBookModal.classList.remove("active");
  overlay.classList.remove("active");
}

// let myLibrary = [];

// function Book() {
//     this.author= ,
//     this.title= ,
//     this.number=  ,
//     this.pages=
// }

// function addBookToLibrary() {
//   // do stuff here
// }
