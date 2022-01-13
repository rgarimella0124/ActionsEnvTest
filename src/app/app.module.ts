import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';

import { LayoutComponent } from './layout-module/layout.component';
import { ListComponent } from './list-component/list.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { AppInsightsHelper } from './application-insights.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LayoutComponent,
    ListComponent,
    AddEditComponent,
  ],
  providers: [AppInsightsHelper],
  bootstrap: [AppComponent],
})
export class AppModule {}
