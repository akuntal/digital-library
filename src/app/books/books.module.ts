import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const routes:Routes = [
    { path:'', component:BookComponent, children:[
        { path:'', component:BookListComponent}
    ]}
]

@NgModule({
    declarations:[BookComponent, BookListComponent],
    imports:[CommonModule, RouterModule.forChild(routes)],
    providers: [BooksService]
})
export class BooksModule {
    
}