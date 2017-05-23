import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common'
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/debounceTime';
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

        var observable = Observable.interval(1000);
        observable
            .flatMap(x => {
                console.log("calling the server to get the latest news");
                return [1, 2, 3];
            })
            .subscribe(news => console.log(news));
    }
}