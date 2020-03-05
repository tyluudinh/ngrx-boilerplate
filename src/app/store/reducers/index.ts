import {
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from './user.reducer';


export interface State {
  user: fromUser.UserState;
}

export const reducers = {
  user: fromUser.reducer
};
export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
