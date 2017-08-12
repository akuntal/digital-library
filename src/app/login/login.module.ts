import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './components/login.component';
import { SignUpComponent } from './components/sign-up.component';


import { LoginService } from './login.service';


const routes:Routes = [
    { path:'', component:LoginComponent},
    { path:'signup', component:SignUpComponent}
]

@NgModule({
    declarations:[LoginComponent, SignUpComponent],
    imports:[CommonModule, RouterModule.forChild(routes), FormsModule],
    providers: [LoginService]
})
export class LoginModule {
    
}