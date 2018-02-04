import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WriteComponent } from './write/write.component';
import { MarkdownModule } from 'angular2-markdown';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    AppComponent,
    WriteComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
