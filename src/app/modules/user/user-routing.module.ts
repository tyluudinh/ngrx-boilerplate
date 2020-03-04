import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './pages/user-list/user-list.component';
import {UserComponent} from './pages/user/user.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: UserListComponent
  },
  {
    path: ':id',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UserRoutingModule { }
