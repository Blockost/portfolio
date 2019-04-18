import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// XXX: 2019-04-18 Blockost Declare ga (Google Analytics) as a function
// to update the tracker config and send events
declare let gtag: (method: string, gaId: string, param: object) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);

        // XXX: 2019-04-18 Blockost Support Google Analytics for SPA
        // See: https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications
        // Also: https://scotch.io/tutorials/integrating-google-analytics-with-angular-2#toc-setup-your-angular-application
        gtag('config', 'UA-138615690-1', {
          page_path: event.urlAfterRedirects
        });
      }
    });
  }
}
