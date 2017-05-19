import {Component} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';

@Component({
    selector: 'my-app',
    template: `
        {{ post.title }}
        <br/>
        {{ post.body | summary:10 }}
    `,
    pipes: [SummaryPipe]
})

export class AppComponent
{
    post = {
        title: "Angular 2 for beginners",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu pulvinar dui. Nullam convallis orci elit, et posuere felis volutpat auctor. Phasellus ornare augue at tempor condimentum. Quisque ultricies quis nunc a malesuada. Nunc non nibh sapien. Vestibulum porttitor lacinia est a imperdiet. Praesent ac massa volutpat, tristique nunc a, ullamcorper turpis."
    }
}