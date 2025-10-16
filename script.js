const myLibrary = [];


 class Book{
    constructor(title,author,pages,readStatus,id) {
     this.title = title;
     this.author = author;
     this.pages = pages; 
     this.readStatus = readStatus; 
    this.id = id;
    }

    changeStatus() {
        if (this.readStatus === "Read"){
       this.readStatus = "Not Read";
            } 
    else if (this.readStatus === "Not Read"){
       this.readStatus = "Read";
           }
    }
 }


function addBookToLibrary(title,author,pages,readStatus) {
  const book = new Book(title,author ,pages,readStatus,crypto.randomUUID());
  myLibrary.push(book);
}




function displayBooks() {
    const library = document.querySelector(".library")

    library.textContent = "";

    myLibrary.forEach((book)=> {
        
        const div =  document.createElement("div");
        div.classList.add("book-card");
        div.dataset.id = book.id;
        
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
        
        const removeBook = document.createElement("button");
        removeBook.classList.add("remove-book");
        removeBook.textContent = "Delete";
        removeBook.dataset.id = book.id;

   removeBook.addEventListener("click", (e) => {
      const idToRemove = e.currentTarget.dataset.id;

      const index = myLibrary.findIndex((book) => book.id === idToRemove);
      if (index > -1) {
        myLibrary.splice(index, 1);
      }
      displayBooks();
    });

    const changeStatus = document.createElement("button");
    changeStatus.textContent = "Toggle Read Status";
    changeStatus.classList.add("change-status");

    changeStatus.dataset.id = book.id;

    changeStatus.addEventListener("click", (e) => {
        const statusToChange = e.currentTarget.dataset.id;
        const index = myLibrary.findIndex((book) => book.id === statusToChange);
        if(index > -1){
            myLibrary[index].changeStatus();
        } 
        displayBooks();
    })

       div.appendChild(changeStatus);
        div.appendChild(removeBook);
        library.appendChild(div);
        
    })
}

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

