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
import { InputService } from './input-service';
import { LogService } from './log-service';

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

  // to inject service into other service (see LogService in Input Service) - you need provide them here
  // and in parent service (InputService)  use @Injectable() and register in constructor
  providers: [InputService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
