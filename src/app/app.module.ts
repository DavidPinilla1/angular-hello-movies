import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localeES from '@angular/common/locales/es-AR';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieListComponent } from './containers/movie-list/movie-list.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeES);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-AR" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
