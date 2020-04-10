import { MyDirective } from './myDirective/mydirective.directive';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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
import { SecondPageComponent } from './second-page/second-page.component';
import { ThirdPageComponent } from './third-page/third-page.component';
import { NameComponent } from './name/name.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  // in this app you can use path: '' and path: '**' - becasue the structer is wrong
  // app.component should not contain pages but only <router-outlet></router-outlet>
  
  // { path: 'home', component: AppComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'second', component: SecondPageComponent},
  // }, children: [
  //   { path: ':id', component: NameComponent },
  // ] },
  { path: 'second/:id', component: NameComponent},
  { path: 'third', component: ThirdPageComponent },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Something go wrong!'} },
  // this ** route should be last
  // { path: '**', redirectTo: '/not-found' },
];
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
    ServRightDeepComponent,
    SecondPageComponent,
    ThirdPageComponent,
    NameComponent,
    NotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // to register routes
    RouterModule.forRoot(appRoutes),
    // for older browsers and servers (servers  parse ulrs first, production?)
    // RouterModule.forRoot(appRoutes, {useHash: true}),
  ],

  // to inject service into other service (see LogService in Input Service) - you need provide them here
  // and in parent service (InputService)  use @Injectable() and register in constructor
  providers: [InputService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
