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
      <div class="booksList">
      <p>"${book.title}" by ${book.author}</p>
     <button class="remove-book">Remove</button>
      </div>
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

const bookList = new BookList();
