const myLibrary = [];

function Book(title,author,pages,readStatus,id) {
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.readStatus = readStatus; 
    this.id = id;
}

function addBookToLibrary(title,author,pages,readStatus) {
  const book = new Book(title,author ,pages,readStatus,crypto.randomUUID());
  myLibrary.push(book);
}

// addBookToLibrary("Atomic Habits", "James Clear", 320, "Read");
// addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, "Not read");

const library = document.querySelector(".library")

function displayBooks() {
    myLibrary.forEach((book)=> {
        
        const div =  document.createElement("div");
        div.classList.add("book-card");
        
        const title = document.createElement("p");
        title.textContent = `Title : ${book.title}`;
        div.appendChild(title);

     const author = document.createElement("p");
        author.textContent = `Author : ${book.author}`;
        div.appendChild(author);

         const pages = document.createElement("p");
        pages.textContent = `Pages : ${book.pages}`;;
        div.appendChild(pages);
        
        const readStatus = document.createElement("p");
        readStatus.textContent = `Read Status : ${book.readStatus}`;;
        div.appendChild(readStatus);
        
        div.appendChild(removeBook);

        const id = removeBook.dataset.id;
        id = book.id;
        removeBook.addEventListener("click", () => {
            button.datasetid.splice();
        })
        library.appendChild(div);
        
    })
}
const removeBook = document.createElement("button");
removeBook.classList.add("remove-book");
removeBook.textContent = "Delete";

displayBooks();

const formContainer = document.querySelector(".form-container");

const addBook = document.querySelector(".new-book");
addBook.addEventListener("click",()=> {
      formContainer.style.display = "block";
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();

       const titleInput = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const pagesInput = document.querySelector("#pages");
   const readStatusInput = document.querySelector("input[name='readStatus']:checked");

        const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const readStatus = readStatusInput.value;

     addBookToLibrary(title,author,pages,readStatus);

      displayBooks();
      form.reset();

      formContainer.style.display = "none";
});