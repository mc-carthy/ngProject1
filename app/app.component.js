System.register(['angular2/core', 'angular2/common', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
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
            let AppComponent = class AppComponent {
                constructor(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var remoteDataStream = Rx_1.Observable.of([1, 2, 3]).delay(5000);
                    remoteDataStream
                        .timeout(1000)
                        .subscribe(x => console.log(x), error => console.log(error));
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