import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <i 
            class="glyphicon"
            [class.glyphicon-star]="isFavourite"
            [class.glyphicon-star-empty]="!isFavourite"
            (click)="onClick()"
        >
        </i>
    `
})

export class AppComponent
{ 
    isFavourite = false;

    onClick()
    {
        this.isFavourite = !this.isFavourite;
    }
}