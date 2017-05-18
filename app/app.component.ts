import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
        <like></like>
    `,
    directives: [FavouriteComponent, LikeComponent]
})

export class AppComponent
{ 
    post = {
        title: "Title",
        isFavourite: true
    }

    onFavouriteChange($event)
    {
        console.log($event);
    }
}