const book = document.querySelector('#book');
const sizeControls = document.querySelectorAll('.font-size');
sizeControls.forEach(control => control.addEventListener('click', changeFontSize));

function changeFontSize(event) {
    event.preventDefault();
    sizeControls.forEach(ctrl => ctrl.classList.remove('font-size_active'));
    this.classList.add('font-size_active');
    const newSize = this.dataset.size;
    book.classList.remove('book_fs-small', 'book_fs-big');
    switch (newSize) {
        case 'small':
            book.classList.add('book_fs-small');
            break;
        case 'big':
            book.classList.add('book_fs-big');
            break;
        default:
            break;
    }
}