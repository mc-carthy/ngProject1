import {Component, OnInit} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    template: `
        <h1>Home Page</h1>
    `,
    directives: [RouterLink]
})
export class HomeComponent {

}