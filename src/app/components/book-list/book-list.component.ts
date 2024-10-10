import { Component } from '@angular/core';
import {BookService} from "../../services/book-list.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})

export class BookListComponent {
  bookTitle: string = '';
  authorName: string = '';
  searchTerm: string = '';  // For search input
  bookList: { title: string; author: string }[] = [];
  filteredBookList: { title: string; author: string }[] = [];

  constructor(private bookService: BookService) {
    this.bookList = this.bookService.getBooks();
    this.filteredBookList = [...this.bookList];
  }

  addBook() {
    if (this.bookTitle.trim() && this.authorName.trim()) {
      const newBook = { title: this.bookTitle.trim(), author: this.authorName.trim() };
      this.bookService.addBook(newBook);
      this.updateBookLists();
      this.bookTitle = '';
      this.authorName = '';
    } else {
    }
  }

  removeBook(book: { title: string; author: string }) {
    this.bookService.removeBook(book);
    this.updateBookLists();
  }

  clearAll() {
    this.bookService.clearAllBooks();
    this.updateBookLists();
  }

  searchBooks() {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredBookList = this.bookList.filter(book =>
      book.title.toLowerCase().includes(searchLower) || book.author.toLowerCase().includes(searchLower)
    );
  }

  updateBookLists() {
    this.bookList = this.bookService.getBooks();
    this.searchBooks();
  }
}
