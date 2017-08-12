import { Router } from '@angular/router';
import { BooksService } from '../../books.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './book-list.component.html'
})
export class BookListComponent {
    books:any = []

    constructor(private booksService:BooksService, private router: Router){};

    ngOnInit(){
        this.booksService.getBooks().subscribe((res)=>{
            this.books = res;
        })
    }

    deleteBook(book_id){
        this.booksService.deleteBook(book_id).subscribe((res) => {
            // if delete request success remove it from books array
            this.books = this.books.filter((book)=> book.id != book_id);
        })
    }
}