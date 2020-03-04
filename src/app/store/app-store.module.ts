import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {UserEffect} from './effects/user.effect';
import {BaseEffect} from './effects/base.effect';
import {StoreRepository} from './repositories/store.repository';
import {AppEffects} from './effects/app.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      AppEffects,
    ])
  ],
  providers: [
    UserEffect,
    BaseEffect,
    StoreRepository
  ]
})
export class AppStoreModule { }
