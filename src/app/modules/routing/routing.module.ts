import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// Import components
import { HomeComponent } from '../../pages/home/home.component';
import { LandingComponent } from '../../pages/landing/landing.component';
import { PageNotFoundComponent } from '../../pages/page-not-found/page-not-found.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { ProfileComponent } from '../../profile/profile.component';

// Add routes to components here (order matters) !
const ROUTES = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**', // fallback route (no match)
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
