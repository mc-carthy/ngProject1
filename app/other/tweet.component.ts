import {Component, Input} from 'angular2/core';
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    templateUrl: `app/tweet.template.html`,
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [LikeComponent]
})

export class TweetComponent
{ 
    constructor(){
        console.log(this.data);
    }
    @Input() data;
}