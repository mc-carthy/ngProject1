import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';

@Component({
    selector: 'my-app',
    template: `
        <i class="glyphicon glyphicon-star"></i>
        <favourite [is-favourite]="post.isFavourite" (favourite-change)="onFavouriteChange($event)"></favourite>
    `,
    directives: [FavouriteComponent]
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