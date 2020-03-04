import {ApiResultStateModel, initApiResultState} from '../models/api-result.model';
import {
  UserAction,
} from '../actions/user.action';
import {createReducer} from '@ngrx/store';
import {BaseApiReducer} from './api-base.reducer';
import {UserModel} from '../models/user.model';

export interface UserState {
  users: ApiResultStateModel<Array<UserModel>>;
  single: ApiResultStateModel<UserModel>;
}
export const initialState: UserState = {
  users: initApiResultState([]),
  single: initApiResultState(null),
};
export const UserReducer = createReducer(
    initialState,
    ...BaseApiReducer('users', UserAction.listUser),
    ...BaseApiReducer('single', UserAction.user),
  )
;
