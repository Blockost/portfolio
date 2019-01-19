import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//
// Custom components
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FeaturedProjectsComponent } from './components/featured-projects/featured-projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';
import { OnScrollTransparencyDirective } from './directives/onScrollTransparency/on-scroll-transparency.directive';
import { ScrollToDirective } from './directives/scroll-to/scroll-to.directive';
import { RoutingModule } from './modules/routing/routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectFakerService } from './services/faker/project/project-faker.service';
import { GithubService } from './services/github/github.service';
import { ProjectService } from './services/project/project.service';
import { UrlBuilderService } from './services/url-builder/url-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OnScrollTransparencyDirective,
    ProjectsComponent,
    ContactFormComponent,
    VerticalTimelineComponent,
    ScrollToDirective,
    FeaturedProjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RoutingModule
  ],
  providers: [
    ProjectService,
    GithubService,
    UrlBuilderService,
    ProjectFakerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
