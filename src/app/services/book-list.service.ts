import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private bookList: { title: string; author: string }[] = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  ];

  getBooks() {
    return this.bookList;
  }

  addBook(book: { title: string; author: string }) {
    this.bookList.push(book);
  }

  removeBook(book: { title: string; author: string }) {
    const index = this.bookList.indexOf(book);
    if (index > -1) {
      this.bookList.splice(index, 1);
    }
  }

  clearAllBooks() {
    this.bookList = [];
  }
}
