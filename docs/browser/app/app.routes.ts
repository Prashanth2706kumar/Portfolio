import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';

export const routes: Routes = [
    {path: "",component:AppComponent},
    {path: "home",component:HomeComponent},
    {path: "about",component:AboutComponent},
    {path: "project",component:WorkComponent},
    {path: "contact",component:ContactComponent}

];
