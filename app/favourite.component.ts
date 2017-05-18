import {Component, Input, Output, EventEmitter} from 'angular2/core';

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
    
    @Output('favourite-change') change = new EventEmitter();

    onClick()
    {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ newValue: this.isFavourite });
    }
}