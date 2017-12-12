import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

// Import components
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { HomepageComponent } from '../components/homepage/homepage.component';

// Add routes to components here (order matters) !
const ROUTES = [
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent,
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
