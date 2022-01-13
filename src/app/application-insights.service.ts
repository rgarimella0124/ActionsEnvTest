// import { Injectable } from '@angular/core';
// import { ApplicationInsights } from '@microsoft/applicationinsights-web';

import { environment } from '../environments/environment.prod';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApplicationInsightsService {
//   private appInsights: ApplicationInsights;

//   constructor() {
//     this.appInsights = new ApplicationInsights({
//       config: {
//         instrumentationKey: environment.appInsights.instrumentationKey,
//         enableAutoRouteTracking: true,
//         enableCorsCorrelation: true,
//       },
//     });
//     this.appInsights.loadAppInsights();
//   }

//   setUserId(userId: string) {
//     this.appInsights.setAuthenticatedUserContext(userId);
//   }

//   clearUserId() {
//     this.appInsights.clearAuthenticatedUserContext();
//   }

//   logPageView(name?: string, uri?: string) {
//     this.appInsights.trackPageView({ name, uri });
//   }

//   logTrace(message: string, properties?: { [key: string]: any }) {
//     this.appInsights.trackTrace({ message: message }, properties);
//   }

//   logException(error: any) {
//     this.appInsights.trackException({
//       exception: error,
//       severityLevel: 3,
//     });
//   }
// }

import { AppInsights } from 'applicationinsights-js';
import { Injectable } from '@angular/core';

@Injectable()
export class AppInsightsHelper {
  private config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: environment.appInsights.instrumentationKey,
  };

  constructor() {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
  }

  logPageView(
    name?: string,
    url?: string,
    properties?: any,
    measurements?: any,
    duration?: number
  ) {
    AppInsights.trackPageView(name, url, properties, measurements, duration);
  }

  logEvent(name: string, properties?: any, measurements?: any) {
    AppInsights.trackEvent(name, properties, measurements);
  }

  logException(exception: Error, properties?: any, measurements?: any) {
    AppInsights.trackException(exception, null, properties, measurements);
  }
}
