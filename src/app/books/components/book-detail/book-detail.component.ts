import { BooksService } from '../../books.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./book-detail.component.html'
})
export class BookDetailComponent {
    book:any = {};
    
    constructor(private booksService:BooksService, private router:Router){};

    submit(){
        this.booksService.addBook(this.book).subscribe((result) => {
            this.router.navigate([''])
        })
    }
}