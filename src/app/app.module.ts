import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PrimarycarouselComponent } from './primarycarousel/primarycarousel.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactcardComponent } from './contactcard/contactcard.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule } from '@angular/material/grid-list';
import { KnowAstavinayakComponent } from './know-astavinayak/know-astavinayak.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    SearchbarComponent,
    PrimarycarouselComponent,
    AboutusComponent,
    ContactusComponent,
    HomepageComponent,
    ContactcardComponent,
    KnowAstavinayakComponent,
    LoginComponent,
    FooterComponent,
    HoroscopeComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    AppRoutingModule, MatGridListModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatExpansionModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
