import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import { InputnameComponent } from './inputname/inputname.component';
import { ShowtextComponent } from './showtext/showtext.component';
import { IteratorComponent } from './iterator/iterator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    InputnameComponent,
    ShowtextComponent,
    IteratorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
