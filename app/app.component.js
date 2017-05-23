System.register(['angular2/core', 'angular2/common', 'rxjs/Observable', 'rxjs/add/observable/fromArray', 'rxjs/add/observable/empty', 'rxjs/add/observable/range', 'rxjs/add/observable/forkJoin', 'rxjs/add/observable/interval', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/delay', 'rxjs/add/operator/map', 'rxjs/add/operator/mergeMap'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Observable_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {},
            function (_7) {},
            function (_8) {},
            function (_9) {}],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var userStream = Observable_1.Observable.of({
                        userId: 1, userName: 'Mick'
                    }).delay(2000);
                    var tweetsStream = Observable_1.Observable.of([1, 2, 3]).delay(1500);
                    Observable_1.Observable
                        .forkJoin(userStream, tweetsStream)
                        .map(joined => new Object({
                        user: joined[0], tweets: joined[1]
                    }))
                        .subscribe(result => console.log(result));
                }
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'my-app',
                    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>
    `
                }), 
                __metadata('design:paramtypes', [common_1.FormBuilder])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map