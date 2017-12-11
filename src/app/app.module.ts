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
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProjectService } from './services/project/project.service';
import { RoutingModule } from './routing/routing.module';
import { GithubService } from './services/github/github.service';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RoutingModule
  ],
  providers: [ProjectService, GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
