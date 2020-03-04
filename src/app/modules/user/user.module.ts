import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './pages/user/user.component';
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {UserEffect} from '../../store/effects/user.effect';
import {UserHttpService} from '../../core/http/user.http.service';


@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    EffectsModule.forFeature([
      UserEffect,
    ])
  ],
  providers: [
    UserEffect,
    UserHttpService
  ]
})
export class UserModule { }
