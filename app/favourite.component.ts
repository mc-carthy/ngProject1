import {Component, Input} from 'angular2/core';

@Component({
    selector: 'favourite',
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

export class FavouriteComponent
{ 
    @Input('is-favourite') isFavourite = false;
    // Non-aliased version shown below
    // @Input('is-favourite') isFavourite = false;

    onClick()
    {
        this.isFavourite = !this.isFavourite;
    }
}