import {Component} from 'angular2/core';
import {FavouriteComponent} from './favourite.component';

@Component({
    selector: 'my-app',
    template: `
        <favourite></favourite>
    `,
    directives: [FavouriteComponent]
})

export class AppComponent
{
}