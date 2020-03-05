import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppStoreModule} from './store/app-store.module';
import {CoreModule} from './core/core.module';
import {LayoutModule} from './layout/layout.module';
import {HomePageModule} from './modules/home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomePageModule,
    AppStoreModule,
    CoreModule,
    LayoutModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
