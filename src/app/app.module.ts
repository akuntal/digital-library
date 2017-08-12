import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HttpService } from './http.service';


const routes:Routes = [
  { path:'login', loadChildren:'./login/login.module#LoginModule'},
  { path:'books', loadChildren:'./books/books.module#BooksModule'},
  { path:'', redirectTo:'books', pathMatch:'full'},
  { path:'**', redirectTo:'books', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
