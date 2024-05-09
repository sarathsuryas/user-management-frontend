import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header/header.component';
import { UserloginComponent } from './User/userLogin/userlogin/userlogin.component';
import { UsersigninComponent } from './User/userRegister/usersignin/usersignin.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserloginComponent,UsersigninComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management-frontend';
}
