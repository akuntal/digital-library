import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
    constructor(private http:Http){};

    login(user):Observable<Response>{
        return this.http.post('api/login', user).map((result) => result.json()).map((result)=>{
        	//if login success, set token in localStorage
        	localStorage.setItem('auth_token', result.token);
        	
        	return result;
        });
    }

    signUp(user):Observable<Response>{
        return this.http.post('api/user', user).map((result) => result.json());
    }
}