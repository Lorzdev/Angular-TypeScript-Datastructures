import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  bookTitle: string = '';
  authorName: string = '';
  bookList: { title: string; author: string }[] = [];

  addBook() {
    if (this.bookTitle.trim() && this.authorName.trim()) {
      const newBook = {
        title: this.bookTitle.trim(),
        author: this.authorName.trim()
      };
      this.bookList.push(newBook);
      this.bookTitle = '';
      this.authorName = '';
    } else {
      console.log('Please fill out all fields.');
    }
  }

  removeBook(book: { title: string; author: string }) {
    const index = this.bookList.indexOf(book);
    if (index > -1) {
      this.bookList.splice(index, 1);
    }
  }
}
