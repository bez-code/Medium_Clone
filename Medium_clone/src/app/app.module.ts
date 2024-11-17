import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideStore } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [provideStore()],
  bootstrap: [AppComponent]
})
export class AppModule { }
