import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common'
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>
    `
})

export class AppComponent
{
    form: ControlGroup;

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            search: []
        });

        var userStream = Observable.of({
            userId: 1, userName: 'Mick'
        }).delay(2000);

        var tweetsStream = Observable.of(
            [1, 2, 3]
        ).delay(1500);

        Observable
            .forkJoin(userStream, tweetsStream)
            .map(joined => new Object({
                user: joined[0], tweets: joined[1]
            }))
            .subscribe(result => console.log(result));
    }
}