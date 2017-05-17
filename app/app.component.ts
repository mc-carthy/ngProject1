import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <div (click)="onDivClick()">
            <button on-click="onClick($event)">Submit</button>
        </div>
    `
})

export class AppComponent
{ 
    onClick($event)
    {
        // $event.stopPropagation();
        console.log("clicked", $event);
    }

    onDivClick($event)
    {
        console.log("clicked div", $event);
    }
}