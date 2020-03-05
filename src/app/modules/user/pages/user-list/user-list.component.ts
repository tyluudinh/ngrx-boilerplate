import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiResultStateModel} from '../../../../store/models/api-result.model';
import {UserModel} from '../../../../store/models/user.model';
import {StoreRepository} from '../../../../store/repositories/store.repository';
import {UserAction} from '../../../../store/actions/user.action';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users$: Observable<ApiResultStateModel<Array<UserModel>>>;

  constructor(
    private storeRepository: StoreRepository
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.storeRepository.getStateByProp('user', 'users');
  }

  fetchUsers() {
    this.storeRepository.dispatch(UserAction.listUser.loadNoCache());
  }
}
