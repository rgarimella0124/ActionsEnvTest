import { Component } from '@angular/core';
import { AppInsightsHelper } from './application-insights.service';
@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
  constructor(private ApplicationInsightsService: AppInsightsHelper) {}
}
