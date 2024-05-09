import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import { loginRequest } from '../../../store/user.action';
import { selectLoading } from '../../../store/user.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlogin',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './userlogin.component.html',
  styleUrl: './userlogin.component.css'
})
export class UserloginComponent implements OnInit{
 isFormSubmitted:boolean = false;
  constructor(private store:Store<AppState>){}
  isLoading:boolean=false;
  ngOnInit(): void {
    this.store.select(selectLoading).subscribe((res)=>{
      this.isLoading = res
    })
    
  }
  login(){
    const email='jasikjads';
    const password ="Sdsds"
    alert(email)
    this.store.dispatch(loginRequest({email,password}))
  }
}
