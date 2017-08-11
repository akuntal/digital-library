import { BooksService } from '../../books.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: './book-list.component.html'
})
export class BookListComponent {
    books:any[] = []

    constructor(private booksService:BooksService){};

    ngOnInit(){
        this.booksService.getBooks().subscribe((res)=>{
            this.books = res;
        })
    }
}