import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { AdminLinkDirective } from './admin-link.directive';
import { ConvertToEuroPipe } from './convert-to-euro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    AdminLinkDirective,
    ConvertToEuroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
