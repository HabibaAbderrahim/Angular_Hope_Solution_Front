import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListCandidatComponent} from './candidat/list-candidat/list-candidat.component';
import {ListCvComponent} from './CV/list-cv/list-cv.component';
import {AddCandidatComponent} from './candidat/add-candidat/add-candidat.component';
import {AddUserComponent} from './user/add-user/add-user.component';
import {ListAllComponent} from './CV/list-all/list-all.component';
import {LoginComponent} from './login/login.component';
import {AuthenticationGuard} from './shared/auth/authentication.guard';
import {AdminGuard} from './shared/guards/admin.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'candidat', component: ListCandidatComponent, canActivate: [AuthenticationGuard]},
  {path: 'candidat/cv', component: ListCvComponent , canActivate: [AuthenticationGuard] },
  {path: 'candidat/all', component: ListAllComponent , canActivate: [AuthenticationGuard , AdminGuard]},
  {path: 'candidat/candidat-new', component: AddCandidatComponent , canActivate: [AuthenticationGuard , AdminGuard]},
  {path: 'user/user-new', component: AddUserComponent , canActivate: [AuthenticationGuard , AdminGuard]},
  {path: 'user/edit-new/:id', component:  AddCandidatComponent , canActivate: [AuthenticationGuard , AdminGuard]},
  {path: 'candidat/sedit-cv/:id', component: ListCvComponent , canActivate: [AuthenticationGuard , AdminGuard] },
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
