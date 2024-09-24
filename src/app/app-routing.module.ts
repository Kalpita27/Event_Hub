import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { AddDetailsComponent } from './add-details/add-details.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    // path: '',
    // redirectTo: '/events',
    // pathMatch: 'full'
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'add-details',
    component: AddDetailsComponent
  }, 
  
  { path: 'events/:id',component: EventsComponent}  ,
  {path: 'special-events', component: BatchDetailsComponent},
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
