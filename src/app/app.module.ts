import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NetflixComponent } from './pages/netflix/netflix.component';
import { NetflixLoginComponent } from './pages/netflix-login/netflix-login.component';
import { NetflixHomeComponent } from './pages/netflix-home/netflix-home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './share/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NetflixComponent,
    NetflixLoginComponent,
    NetflixHomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
