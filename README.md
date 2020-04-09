# AngularSandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Angular qiuck review

1. CLI - ng (g c) generate component your_component_name
2. string interpolation - {{variable}} / also ternary operator inside - comp. header
3. property binding - [disabled]='boolean_variable' / [innerText]='text' - comp. header
4. event binding - (click)='function()' - comp. header
5. event binding with passing data - (click)='function($event)' - comp. inputname
6. two-way data binding (input) - [(ngModel)] - comp. inputname
7. styles - [ngClass] / [ngStyle] - comp. showtext
8. structural directive - *ngIf - comp. showtext
9. *ngIf conditionaly - with else and ng-template - comp. showtext
10. ng-content - data/template from parent - comp. showtext
11. *ngFor - iteration on elements - comp. iterator / comp. numberslist
12. binding to custom properties from parent - @Input / [element] - comp. iterator
13. binding to custom properties with alias - @Input(name_alias) / [name_alias] - comp. iterator
14. custom events - send data to parent - @Output() / emit - comp. sendevent
15. local reference - #element - comp. sendevent
16. view/data from child - @ViewChild - comp. app
17. component lifecycle hooks - comp. app
18. @ContentChild - ?
19. directives - @HostListener / @HostBinding - comp. myDirective / comp. app
20. building own structural directive - *something - ?
21. ngSwitch - ?
22. services - global state - simple example - comp. input-service / comp. app / comp. serv-left / comp. serv-right-deep
