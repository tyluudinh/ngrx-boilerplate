import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {UserState, UserReducer} from './user.reducer';

export interface State {
  user: UserState;
}

export const reducers: ActionReducerMap<State> = {
  user: <any> UserReducer
};

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug] : [debug];
