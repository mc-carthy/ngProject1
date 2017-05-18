import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';
import {TweetComponent} from './tweet.component';
import {TweetService} from './tweet.service';

@Component({
    selector: 'my-app',
    template: `
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    directives: [FavouriteComponent, LikeComponent, VoterComponent, TweetComponent],
    providers: [TweetService]
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

    tweets: any[];
    
    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
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