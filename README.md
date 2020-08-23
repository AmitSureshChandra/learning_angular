#### install angular using npm
    npm install -g angular-cli


#### Create Angular Project

    ng new Project_name

#### Boot server

    ng serve

#### Creating Component

    ng generate component name_component

#### Data Flow

    1. Into View    
        - String Interpolation
             {{ title }}
        - Property binding
             <input [required]='expression'> 
    
    2. Out of View 
        -Event Binding
             <button (click)='expression/function' > 
            Event Component class can handle event
    
    3. Two-way Data-Binding
         <input [(ngModel)]='Model/Obj> 


#### Property Bindings 

    - Native  HTML Property 
         [value] = 'exprn' 
    
    - Built in angular directive 
         [ngClass] = 'exprn' 
    
    - Custom made Property
         [my_prop] = 'exprn' 
    
    
#### Event Binding 
    1. native Event Binding
        <button (click)='function'>

    2. custom event we made 
        <app-component2 (update)='function'>

#### Input Decorator

    @Input() data; // in .component.ts inside class while sending data to child component
    
#### Output Decorator

    @Output() onListen = EventEmitter();
    
#### Passing Data using route


    # in .component.ts
    import { ActivatedRoute} from '@angular/router';
       
    export class DirectoryComponent implements OnInit {
      name : string
      constructor(private route : ActivatedRoute) {
        this.name = route.snapshot.params['id']
      }
      ngOnInit() {
      }
    }
    
    #pass data as /directory/amit
    
    #in route '/directory/:id'
    
#### Directives
    - are instructions that tell angular to do something
    
    Types Of Directive 
        1. Attribute     - interact with element on value change...  eg. ngClass
        2. Structural    - changes structure of HTML Code ... eg. *ngIf
        

# AngularProject

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
