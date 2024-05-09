import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-usersignin',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './usersignin.component.html',
  styleUrl: './usersignin.component.css'
})
export class UsersigninComponent {
 userForm:FormGroup
 constructor() {
  this.userForm = new FormGroup({
    name:new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    password:new FormControl("",[Validators.required,Validators.maxLength(8)]),
    confirmPassword:new FormControl("",[Validators.required,Validators.minLength(8)])
  })
 }
}
