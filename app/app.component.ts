import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    // The template shows two different methods of hiding the DOM elements, 
    // the [hidden] method will show up in the DOM inspector, the *ngIf will not
    // Use *ngIf for larger element trees
    template: `
        <div *ngIf="courses.length > 0">
            List of courses
        </div>
        <div [hidden]="courses.length > 0">
            You don't have any courses yet
        </div>
    `
})

export class AppComponent
{ 
    courses = ["test"];
}