import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';

@Component({
    selector: 'my-app',
    template: `
        <vote
            [vote-count]="post.voteCount"
            [my-vote]="post.myVote"
            (vote)="onVote($event)"
        >
        </vote>
    `,
    directives: [FavouriteComponent, LikeComponent, VoterComponent]
})

export class AppComponent
{ 
    tweet = {
        totalLikes: 10,
        isLiked: false
    }

    post = {
        voteCount: 10,
        myVote: 0
    }

    onVote($event)
    {
        console.log($event);
    }

    onFavouriteChange($event)
    {
        console.log($event);
    }
}