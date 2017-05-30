System.register(["angular2/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, ZippyComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ZippyComponent = class ZippyComponent {
                constructor() {
                    this.isExpanded = false;
                }
                toggle() {
                    this.isExpanded = !this.isExpanded;
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], ZippyComponent.prototype, "title", void 0);
            ZippyComponent = __decorate([
                core_1.Component({
                    selector: 'zippy',
                    styles: [`
        .zippy {
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .zippy .zippy-content {
            padding: 20px;
        }
    `],
                    template: `
        <div class=zippy>
            <div 
                class=zippy-title
                (click)="toggle()">
                {{ title }}
                <i
                    class="pull-right glyphicon"
                    [ngClass]="
                        {
                            'glyphicon-chevron-down': !isExpanded,
                            'glyphicon-chevron-up': isExpanded
                        }">
                </i>
            </div>
            <div *ngIf="isExpanded" class="zippy-content">
                <ng-content></ng-content>
            </div>
        </div>
    `
                })
            ], ZippyComponent);
            exports_1("ZippyComponent", ZippyComponent);
        }
    };
});
//# sourceMappingURL=zippy.component.js.map