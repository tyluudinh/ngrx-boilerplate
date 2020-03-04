import { Injectable } from '@angular/core';
import {BaseHttpService} from './base.http.service';

@Injectable()
export class UserHttpService {
  constructor(private baseHttpService: BaseHttpService) {}
  getUsers() {
    return this.baseHttpService.get('/users');
  }
  getUser({id}) {
    return this.baseHttpService.get(`/users/${id}`);
  }
}
