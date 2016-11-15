import { routing, appRoutingProviders } from './app.routing';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './includes/header/header.component';
import { LeftSideComponent } from './includes/left-side/left-side.component';
import { FooterComponent } from './includes/footer/footer.component';
import { AmazonComponent } from './amazon/amazon.component';
import { AzureComponent } from './azure/azure.component';
import { LeftSideAmazonComponent } from './includes/left-side-amazon/left-side-amazon.component';
import { LeftSideAzureComponent } from './includes/left-side-azure/left-side-azure.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    LeftSideComponent,
    FooterComponent,
    AmazonComponent,
    AzureComponent,
    LeftSideAmazonComponent,
    LeftSideAzureComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
