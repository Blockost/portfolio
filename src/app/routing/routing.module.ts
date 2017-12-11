import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

// Import components
import { ProjectListComponent } from '../components/project-list/project-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

// Add routes to components here (order matters) !
const ROUTES = [
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
    redirectTo: '/projects',
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
