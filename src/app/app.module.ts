import { MyDirective } from './myDirective/mydirective.directive';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderItemComponent } from './header-item/header-item.component';
import { InputnameComponent } from './inputname/inputname.component';
import { ShowtextComponent } from './showtext/showtext.component';
import { IteratorComponent } from './iterator/iterator.component';
import { SendeventComponent } from './sendevent/sendevent.component';
import { NumberslistComponent } from './numberslist/numberslist.component';
import { BetterDirevtiveDirective } from './myDirective/better-direvtive.directive';
import { ServLeftComponent } from './serv-left/serv-left.component';
import { ServRightComponent } from './serv-right/serv-right.component';
import { ServRightDeepComponent } from './serv-right-deep/serv-right-deep.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    InputnameComponent,
    ShowtextComponent,
    IteratorComponent,
    SendeventComponent,
    NumberslistComponent,
    MyDirective,
    BetterDirevtiveDirective,
    ServLeftComponent,
    ServRightComponent,
    ServRightDeepComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
