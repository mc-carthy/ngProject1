import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <button 
            class="btn btn-primary"
            [style.backgroundColor]="isActive ? 'blue' : 'grey'">Submit</button>
    `
})

export class AppComponent
{ 
    isActive = true;
}