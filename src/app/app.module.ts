import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Custom modules
import { RoutingModule } from './modules/routing/routing.module';

// Custom components
import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { VerticalTimelineComponent } from './components/vertical-timeline/vertical-timeline.component';
import { OnScrollTransparencyDirective } from './directives/onScrollTransparency/on-scroll-transparency.directive';
import { ScrollToDirective } from './directives/scroll-to/scroll-to.directive';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectFakerService } from './services/faker/project/project-faker.service';
import { GithubService } from './services/github/github.service';
import { ProjectService } from './services/project/project.service';
import { UrlBuilderService } from './services/url-builder/url-builder.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    PageNotFoundComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    OnScrollTransparencyDirective,
    ProjectsComponent,
    ProfileComponent,
    ContactFormComponent,
    VerticalTimelineComponent,
    ScrollToDirective
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
