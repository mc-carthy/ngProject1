import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';

@Component({
    selector: 'my-app',
    template: `
        <like [totalLikes]="tweet.totalLikes" [is-liked]="tweet.isLiked"></like>
    `,
    directives: [FavouriteComponent, LikeComponent]
})

export class AppComponent
{ 
    tweet = {
        totalLikes: 10,
        isLiked: false
    }

    post = {
        title: "Title",
        isFavourite: true
    }

    onFavouriteChange($event)
    {
        console.log($event);
    }
}