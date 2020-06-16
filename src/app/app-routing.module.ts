import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  { path:"", component:HomepageComponent},
  { path:"home", component:HomepageComponent},
  { path:"horoscope", component:HomepageComponent},
  { path:"puja", component:HomepageComponent},
  { path:"contactus", component:ContactusComponent},
  { path:"aboutus", component:AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
