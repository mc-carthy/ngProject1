import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{ title }}</h1>
        
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        <img bind-src="imageUrl" />
    `
})

export class AppComponent
{ 
    title = "Angular App";
    imageUrl = "http://lorempixel.com/400/200/";
}