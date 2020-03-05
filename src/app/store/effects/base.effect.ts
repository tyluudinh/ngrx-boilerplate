import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {IBaseApiAction} from '../actions/base.action';
import {IBaseActionModel} from '../models/base-action.model';

@Injectable()
export class BaseEffect {
  constructor(
    public actions$: Actions,
  ) {}

  api$(apiAction: IBaseApiAction, service: (arg?) => Observable<any>) {
    return createEffect(() =>
      this.actions$.pipe(
        ofType(
          apiAction.load(),
          apiAction.loadNoCache()
        ),
        switchMap((action: IBaseActionModel<any>) =>
          service(action.payload).pipe(
            map(data => apiAction.success({data})),
            catchError(errors => of(apiAction.failed({errors})))
          )
        )
      )
    );
  }
}
