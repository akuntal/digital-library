import { BooksService } from '../../books.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl:'./book-detail.component.html'
})
export class BookDetailComponent {
    book:any = {};
    editMode: boolean = false;

    constructor(private booksService:BooksService, private router:Router, private activatedRoute:ActivatedRoute){};


    ngOnInit(){
        console.log(this.activatedRoute);
        const snapshot = this.activatedRoute.snapshot;
        this.editMode = !!snapshot.data.isEdit;

        // fetch book data if its edit mode
        if(this.editMode){
            this.booksService.getBook(snapshot.params.book_id).subscribe((res)=>{
                this.book = res[0];
            })
        }
    }


    submit(){
        if(this.editMode){
            // update book data if its edit mode
            this.booksService.updateBook(this.book).subscribe((result) => {
                this.router.navigate([''])
            })
        }else{
            // add new book
            this.booksService.addBook(this.book).subscribe((result) => {
                this.router.navigate([''])
            })
        }
    }

    
}