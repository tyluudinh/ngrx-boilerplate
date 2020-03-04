import {BaseApiAction} from './base.action';
export const UserAction = {
  listUser: BaseApiAction('users'),
  user: BaseApiAction('user'),
};
