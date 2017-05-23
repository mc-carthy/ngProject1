import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common'
// import {Observable} from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';

// import 'rxjs/add/observable/fromArray';
// import 'rxjs/add/observable/empty';
// import 'rxjs/add/observable/range';
// import 'rxjs/add/observable/forkJoin';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/retry';

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

        // var observable = Observable.throw(new Error("Something failed."));

        // observable
        //     .subscribe(
        //         x => console.log(x),
        //         error => console.error(error)
        //     );

        var counter = 0;

        var ajaxCall = Observable.of('url')
            .flatMap(() => {
                if (++counter < 2)
                {
                    return Observable.throw(new Error("Request failed"));
                }
                return Observable.of([1, 2, 3]);
            });

        ajaxCall
            .retry(3)
            .subscribe(
                x => console.log(x),
                error => console.log(error)
            );
    }
}