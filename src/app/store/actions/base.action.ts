import {props, createAction} from '@ngrx/store';
export interface IBaseApiAction {
  load: any;
  loadNoCache: any;
  success: any;
  failed: any;
}
export function BaseApiAction(key: string): IBaseApiAction {
  return <IBaseApiAction> {
    load: createAction(`[${key}] Load`, props<{payload: any}>()),
    loadNoCache: createAction(`[${key}] LoadNoCache`, props<{payload: any}>()),
    success: createAction(
      `[${key}] LoadSuccess`,
      props<{data: any}>()
    ),
    failed: createAction(
      `[${key}] LoadFailed`,
      props<{ errors: string }>()
    ),
  };
}
