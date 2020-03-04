import {Injectable} from '@angular/core';
import {createSelector, select, Store} from '@ngrx/store';
import {State} from '../reducers';

@Injectable()
export class StoreRepository {
  constructor(
    private store: Store<State>
  ) {}
  getStateByProp(keyRoot: string, prop: string) {
    return this.store.pipe(
      select(this.createSelectorByKeyRoot(keyRoot), {name: prop})
    );
  }
  dispatch(action) {
    this.store.dispatch(action);
  }
  private createSelectorByKeyRoot(keyRoot: string) {
    return createSelector(
      (state: State) => state[keyRoot],
      (value, props) => value[props.name]
    );
  }
}
