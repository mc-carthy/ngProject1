System.register(['angular2/core', 'angular2/common', 'rxjs/Observable', 'rxjs/add/observable/fromArray', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
            function (_3) {}],
        execute: function() {
            let AppComponent = class AppComponent {
                constructor(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    // var search = this.form.find('search');
                    // search.valueChanges
                    //     .debounceTime(400)
                    //     .map(str => (<string>str).replace(' ', '-'))
                    //     .subscribe(x => console.log(x));
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -2; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Observable_1.Observable
                        .fromArray(startDates)
                        .map(date => {
                        console.log("Getting deals for date " + date);
                        return [1, 2, 3];
                    })
                        .subscribe(x => console.log(x));
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