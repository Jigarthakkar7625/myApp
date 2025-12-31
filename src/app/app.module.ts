import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ // Components, Directives, Pipes
    AppComponent, 
    HeaderComponent,
    FooterComponent
  ],
  imports: [ // packages/modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // Services
  bootstrap: [AppComponent]
})
export class AppModule { }

// HR, User, Sales, Admin, SuperAdmin

// main.ts > app.module.ts