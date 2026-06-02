// Create a library system that allows users to add, search, and delete books. Each book should have an id, name, author, and year of publication. The system should allow users to search for books by name or author and display the results in a user-friendly format.
const library = [
    {
        id: 1,
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: "1925"
    },
{
    id: 2,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960"
}
];
//add book
let id = prompt("Enter book id:");

for (let i = 0; i < library.length; i++) {
    if (library[i].id == id) {
        alert(library[i].name + " by " + library[i].author + " was published in " + library[i].year);
        break;
    } else if (i === library.length - 1) {
        let name = prompt("Enter book name:");
        let author = prompt("Enter book author:");
        let year = prompt("Enter book year:");
        let newBook = {
            id: library.length + 1,
            name: name,
            author: author,
            year: year
        };

        library.push(newBook);
        alert("New book added: " + newBook.name);
    }
}
//searching for books by keyword not matter if it's in lowercase or uppercase
let keyword = prompt("Enter keyword to search for books:");
let foundBooks = [];
for (let i = 0; i < library.length; i++) {
    if (library[i].name.toLowerCase().includes(keyword.toLowerCase()) || library[i].author.toLowerCase().includes(keyword.toLowerCase())) {
        foundBooks.push(library[i]);
    }
}

if (foundBooks.length > 0) {
    let message = "Books found:\n";
    for (let i = 0; i < foundBooks.length; i++) {
        message += foundBooks[i].name + " by " + foundBooks[i].author + " (" + foundBooks[i].year + ")\n";
    }
    alert(message);
} else {
    alert("No books found with the keyword: " + keyword);
}

//deleting a book by id
let idToDelete = prompt("Enter book id to delete:");
for (let i = 0; i < library.length; i++) {
    if (library[i].id == idToDelete) {
        library.splice(i, 1);
        alert("Book with id " + idToDelete + " has been deleted.");
        break;
    } else if (i === library.length - 1) {
        alert("Book with id " + idToDelete + " not found.");
    }
}   
