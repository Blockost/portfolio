import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Import components
import { VerticalTimelineComponent } from '../../components/vertical-timeline/vertical-timeline.component';
import { HomeComponent } from '../../pages/home/home.component';
import { PageNotFoundComponent } from '../../pages/page-not-found/page-not-found.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';

// Add routes to components here (order matters) !
const ROUTES = [
  {
    path: 'timeline',
    component: VerticalTimelineComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
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
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule {}
