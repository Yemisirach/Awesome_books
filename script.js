class BookList {
  constructor() {
    this.form = document.querySelector(".add-book-form");
    this.bookTitle = document.querySelector("#book-title");
    this.bookAuthor = document.querySelector("#book-author");
    this.booksContainer = document.querySelector(".books-container");
    this.books = JSON.parse(localStorage.getItem("Books")) || [];
    this.render();
    this.bindEvents();
  }
  render() {
    this.books.forEach((book) => {
      this.booksContainer.innerHTML += ` 
      <div class="Books">
                  <p class="title-text">${book.title}</p>
                  <p class="author-text">${book.author}</p>
                  <button class="remove-book">Remove</button>
                  <hr>
              </div>
      `;
    });
  }

  bindEvents() {
    this.form.addEventListener("submit", this.addBook.bind(this));
    this.booksContainer.addEventListener("click", this.removeBook.bind(this));
  }
}
