console.log('This is a Harri Library Prototype JS');

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function (book) {
    // console.log('this is add')
    let tableBody = document.getElementById('tableBody');
    let ourString = `<tr>
                         <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
    tableBody.innerHTML += ourString;
    localStorage.setItem("notes", JSON.stringify(notesObj));
}

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, myMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong>${myMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-haspopup="true">&times;</span>
                            </button>
                      </div>`

    setTimeout(() => {
        message.innerHTML = "";
    }, 3000);
}




let libraryForm = document.getElementById('libraryForm');

libraryForm.addEventListener('submit', submitLibraryForm);
function submitLibraryForm(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type)
    // console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book added successfully');
    }
    else {
        display.show('danger', 'Error are occour');
    }
    e.preventDefault();
}

