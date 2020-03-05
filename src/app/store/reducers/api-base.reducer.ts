import {on} from '@ngrx/store';
import {BaseApiAction, IBaseApiAction} from '../actions/base.action';
import {IBaseActionModel} from '../models/base-action.model';

export function BaseApiReducer(propKey: string, apiAction?: IBaseApiAction, key?: string) {
  if (!apiAction) {
    apiAction = BaseApiAction(key);
  }
  return [
    on(apiAction.load, (state, action) => ({
      ...state,
      [propKey]: {
        ...state[propKey],
        payload: action.payload,
        loading: true,
      }
    })),
    on(apiAction.loadNoCache, (state, action: IBaseActionModel<any>) => ({
      ...state,
      [propKey]: {
        ...state[propKey],
        payload: action.payload,
        loading: true,
        errors: null,
        data: action.dataReset ? action.dataReset : null
      }
    })),
    on(apiAction.success, (state, action) => ({
      ...state,
      [propKey]: {
        ...state[propKey],
        loading: false,
        data: action.data
      }
    })),
    on(apiAction.failed, (state, action) => ({
      ...state,
      [propKey]: {
        ...state[propKey],
        loading: false,
        errors: action.errors
      }
    }))
  ];
}
