import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModule } from '@auth0/auth0-angular';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProtegidaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'janusldsxr-15.us.auth0.com',
      clientId: '7F0F3db5RjTLqG0IQh3u221sJ6DtNemG'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
