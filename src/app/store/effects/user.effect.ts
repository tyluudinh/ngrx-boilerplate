import { Injectable } from '@angular/core';
import {
  UserAction
} from '../actions/user.action';
import {BaseEffect} from './base.effect';
import {UserHttpService} from '../../core/http/user.http.service';

@Injectable()
export class UserEffect {
  constructor(
    private baseEffect: BaseEffect,
    private userHttpService: UserHttpService,
  ) {}
  apiUsers$ = this.baseEffect.api$(UserAction.listUser, () => this.userHttpService.getUsers());
  apiUser$ = this.baseEffect.api$(UserAction.user, (id) => this.userHttpService.getUser(id));
}
