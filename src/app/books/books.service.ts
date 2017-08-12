import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../http.service';


@Injectable()
export class BooksService {
    constructor(private http:HttpService){};

    getBooks():Observable<Response>{
        return this.http.get('api/books').map((result) => result.json());
    }

    addBook(book:any):Observable<Response>{
        return this.http.post('api/book', book).map((result) => result.json());
    }

    updateBook(book:any):Observable<Response>{
        return this.http.put('api/book/'+book.id, book).map((result) => result.json());
    }

    getBook(book_id):Observable<Response> {
        return this.http.get('api/book/'+book_id).map((res) =>  res.json());
    }

    deleteBook(book_id):Observable<Response> {
        return this.http.delete('api/book/'+book_id).map((res) =>  res.json());
    }
}