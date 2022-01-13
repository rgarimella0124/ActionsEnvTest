import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppInsightsHelper } from '../application-insights.service';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(
    private http: HttpClient,
    private appinsights: AppInsightsHelper
  ) {}

  getAll() {
    const url = 'https://employeeapipoc.azurewebsites.net/api/Employee';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };
    return this.http.get(url, httpOptions);
  }

  create(params) {
    const url = 'https://employeeapipoc.azurewebsites.net/api/Employee/Create';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };
    try {
      return this.http.post(url, params, httpOptions);
    } catch (exception) {
      console.log('this is get all Exception' + exception);
      this.appinsights.logException(exception);
    }
  }

  update(userData) {
    const url = `https://employeeapipoc.azurewebsites.net/api/Employee`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    try {
      return this.http.put(url, userData, httpOptions);
    } catch (exception) {
      console.log('this is get all Exception' + exception);
      this.appinsights.logException(exception);
    }
  }

  delete(userId) {
    const url = `https://employeeapipoc.azurewebsites.net/api/Employee/${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    try {
      return this.http.delete(url, httpOptions);
    } catch (exception) {
      console.log('this is get all Exception' + exception);
      this.appinsights.logException(exception);
    }
  }

  getUserById(userId) {
    const url = `https://employeeapipoc.azurewebsites.net/api/Employee/${userId}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=UTF-8',
      }),
    };

    try {
      return this.http.get(url, httpOptions);
    } catch (exception) {
      console.log('this is get all Exception' + exception);
      this.appinsights.logException(exception);
    }
  }
}
