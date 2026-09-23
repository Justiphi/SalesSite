import { HttpClientModule } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Nav } from './nav/nav';
import { Login } from './components/login/login';

@NgModule({
  declarations: [
    App,
    Login
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule,
    Nav
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
