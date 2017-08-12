import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
    
    user:any = {};

    constructor(private loginService: LoginService, private router:Router){};

    login(){
    	this.loginService.signUp(this.user).subscribe((res)=>{
    		this.router.navigate(['']);
    	})
    }
}