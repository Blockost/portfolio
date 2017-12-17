import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom modules
import { AngularMaterialModule } from './angular-material/angular-material.module';
// import { RoutingModule } from './routing/routing.module';

// Custom components
import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectService } from './services/project/project.service';
import { RoutingModule } from './routing/routing.module';
import { GithubService } from './services/github/github.service';
import { UrlBuilderService } from './services/url-builder/url-builder.service';
import { ProjectFakerService } from './services/faker/project/project-faker.service';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    PageNotFoundComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RoutingModule
  ],
  providers: [ProjectService, GithubService, UrlBuilderService, ProjectFakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
