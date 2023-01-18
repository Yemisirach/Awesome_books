const menuItems = document.querySelectorAll("li");
const sections = document.querySelectorAll("section");
function reset() {
  sections.forEach((section) => {
    section.style.display = "none";
  });
}
reset();
sections[0].style.display = "block";

menuItems[0].addEventListener("click", () => {
  reset();
  sections[0].style.display = "block";
});

menuItems[1].addEventListener("click", () => {
  reset();
  sections[1].style.display = "block";
});

menuItems[2].addEventListener("click", () => {
  reset();
  sections[2].style.display = "block";
});

class BookList {
  constructor() {
    this.form = document.querySelector(".add-book-form");
    this.bookTitle = document.querySelector("#book-title");
    this.bookAuthor = document.querySelector("#book-author");
    this.booksContainer = document.querySelector(".books-container");

    this.books = JSON.parse(localStorage.getItem("Books")) || [];
    this.domDisplay();
    this.bindEvents();
  }

  domDisplay() {
    this.books.forEach((book) => {
      this.booksContainer.innerHTML += ` 
      <div class="Books">
      <p>"${book.title}" by ${book.author}</p>
     <button class="remove-book">Remove</button>
   </div>
   
      `;
    });
  }

  bindEvents() {
    this.form.addEventListener("submit", this.addBook.bind(this));
    this.booksContainer.addEventListener("click", this.removeBook.bind(this));
  }

  addBook(e) {
    e.preventDefault();
    this.booksContainer.innerHTML += ` 
        <div class="Books">
                    <p>"${this.bookTitle.value}" by ${this.bookAuthor.value}</p>
                    <button class="remove-book">Remove</button>
                </div>
                
        `;
    this.books.push({
      title: this.bookTitle.value,
      author: this.bookAuthor.value,
    });

    localStorage.setItem("Books", JSON.stringify(this.books));
  }

  removeBook(e) {
    if (e.target.classList.contains("remove-book")) {
      const index = Array.from(
        e.target.parentElement.parentElement.children
      ).indexOf(e.target.parentElement);
      this.books.splice(index, 1);
      e.target.parentElement.remove();
      localStorage.setItem("Books", JSON.stringify(this.books));
    }
  }
}

new BookList(); // eslint-disable-line no-new
