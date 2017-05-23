import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common'
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/fromArray';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

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

        // Observable
        //     .empty()
        //     .subscribe(x => console.log(x));

        // Observable
        //     .range(1, 5)
        //     .subscribe(x => console.log(x));

        // Observable
        //     .fromArray([1, 2, 3, 4, 5])
        //     .subscribe(x => console.log(x));

        Observable
            .of([1, 2, 3, 4, 5])
            .subscribe(x => console.log(x));
    }
}