import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <input type="text" [(ngModel)]="title" />

        <input type="button" (click)="title = ''" value="Clear" />
        Preview: {{ title }}
    `
})

export class AppComponent
{ 
    title = "Angular App";
}