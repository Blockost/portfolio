import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

// Import components


// Add routes to components here (order matters) !
const ROUTES = [];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
