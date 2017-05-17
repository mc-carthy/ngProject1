import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Submit</button>
    `
})

export class AppComponent
{ 
    isActive = true;
}