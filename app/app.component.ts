import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <ul>
            <li>Title: {{ task.title }}</li>
            <li>Assigned to: {{ task.assignee?.name }}</li>
        </ul>
    `
})

export class AppComponent
{
    task = {
        title: "Review Applications",
        assignee: {
            name: "Mick"
        }
    };
}