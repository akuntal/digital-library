import { FormsModule } from '@angular/forms';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes:Routes = [
    { path:'', component:BookComponent, children:[
        { path:'', component:BookListComponent},
        { path:'add', component:BookDetailComponent},
        { path:'edit/:book_id', component:BookDetailComponent}
    ]}
]

@NgModule({
    declarations:[BookComponent, BookListComponent, BookDetailComponent],
    imports:[CommonModule, RouterModule.forChild(routes), FormsModule],
    providers: [BooksService]
})
export class BooksModule {
    
}