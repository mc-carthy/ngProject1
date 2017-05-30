import {Component, Input} from 'angular2/core';

@Component({
    selector: 'like',
    templateUrl: `app/like.template.html`,
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }

        .highlighted {
            color: deeppink;
        }
    `]
})

export class LikeComponent
{ 
    @Input() totalLikes = 0;
    @Input() isLiked = false;
    
    onClick()
    {
        this.isLiked = !this.isLiked;
        this.totalLikes += this.isLiked ? 1 : -1;
    }
}