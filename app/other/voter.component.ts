import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'vote',
    templateUrl: `app/voter.template.html`,
    styles: [`
        .voter {
            width: 20px;
            text-align: center;
            color: #999;
        }

        .vote-count {
            font-size: 1.2em;
        }

        .vote-button {
            cursor: pointer;
        }

        .highlighted {
            font-weight: bold;
            color: orange;
        }
    `]
})

export class VoterComponent
{ 
    @Input("vote-count") voteCount = 0;
    @Input("my-vote") myVote = 0;

    @Output() vote = new EventEmitter();
    
    onUpVote()
    {
        if (this.myVote == 1)
        {
            return;
        }

        this.myVote++;
        
        this.vote.emit ({ myVote: this.myVote })
    }

    onDownVote()
    {
        if (this.myVote == -1)
        {
            return;
        }

        this.myVote--;

        this.vote.emit ({ myVote: this.myVote })
    }
}