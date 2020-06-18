import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { KnowAstavinayakComponent } from './know-astavinayak/know-astavinayak.component';
import { LoginComponent } from './login/login.component';
import { HoroscopeComponent } from './horoscope/horoscope.component';


const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "home", component: HomepageComponent },
  { path: "horoscope", component: HoroscopeComponent },
  { path: "puja", component: HomepageComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "aboutus", component: AboutusComponent },
  { path: "ashtavinayk", component: KnowAstavinayakComponent },
  { path: "login", component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
