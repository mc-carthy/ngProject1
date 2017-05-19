import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <br/>
        {{ course.title | uppercase }}
        <br/>
        {{ course.students | number }}
        <br/>
        {{ course.rating | number:'1.2-2' }}
        <br/>
        {{ course.price | currency:'GBP':true:'2.2-2' }}
        <br/>
        {{ course.releaseDate | date:'MMM yyyy'}}
        <br/>
        {{ course | json }}
    `
})

export class AppComponent
{
    course = {
        title: "Angular 2 for beginners",
        rating: 4.9745,
        students: 5981,
        price: 99.95,
        releaseDate: new Date(2016, 3, 1)
    }
}