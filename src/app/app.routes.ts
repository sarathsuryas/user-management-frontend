import { Routes } from '@angular/router';
import { UserloginComponent } from './User/userLogin/userlogin/userlogin.component';
import { UsersigninComponent } from './User/userRegister/usersignin/usersignin.component';
import { UserhomeComponent } from './User/userHome/userhome/userhome.component';

import { AdminloginComponent } from './Admin/adminlogin/adminlogin.component';
import { AdminsigninComponent } from './Admin/adminsignin/adminsignin.component';

export const routes: Routes = [
  {path:'',component:UserloginComponent},
  {path:'signin',component:UsersigninComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'admin/signin',component:AdminsigninComponent}
];
