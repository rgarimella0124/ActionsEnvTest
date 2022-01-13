import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { UserService } from '@app/_services';
import { AppInsightsHelper } from '../application-insights.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users = null;

  constructor(
    private userService: UserService,
    private appinsights: AppInsightsHelper
  ) {}

  ngOnInit() {
    try {
      this.userService
        .getAll()
        .pipe(first())
        .subscribe((users) => {
          this.users = users;
          this.appinsights.logEvent(JSON.stringify(users));
        });
    } catch (error) {
      console.log('this is error ' + error);
      this.appinsights.logException(error);
    }
  }

  deleteUser(id: string) {
    const user = this.users.find((x) => x.id === id);
    // user.isDeleting = true;
    this.userService
      .delete(id)
      .pipe(first())
      .subscribe(() => {
        this.userService
          .getAll()
          .pipe(first())
          .subscribe((users) => (this.users = users));
      });
  }
}
