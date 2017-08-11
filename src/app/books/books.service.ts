import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class BooksService {
    constructor(private http:Http){};

    getBooks():Observable<any>{
        return this.http.get('api/books').map((result) => result.json());
    }

    addBook(book:any):Observable<any>{
        return this.http.post('api/book/add', book).map((result) => result.json());
    }
}