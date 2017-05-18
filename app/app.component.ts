import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';

@Component({
    selector: 'my-app',
    template: `
        <favourite [is-favourite]="post.isFavourite"></favourite>
    `,
    directives: [FavouriteComponent]
})

export class AppComponent
{ 
    post = {
        title: "Title",
        isFavourite: true
    }
}