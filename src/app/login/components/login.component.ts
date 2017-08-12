import { LoginService } from '../login.service';

import { Router } from '@angular/router';

import { Component } from '@angular/core';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    
    user:any = {};

    constructor(private loginService: LoginService, private router:Router){};

    login(){
    	this.loginService.login(this.user).subscribe((res)=>{
    		this.router.navigate(['']);
    	})
    }
}