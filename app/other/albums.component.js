System.register(["angular2/core", "angular2/http", "./photo.service", "angular2/router"], function (exports_1, context_1) {
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
    var core_1, http_1, photo_service_1, router_1, AlbumsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            AlbumsComponent = class AlbumsComponent {
                constructor(_photoService) {
                    this._photoService = _photoService;
                    this.isLoading = true;
                }
                ngOnInit() {
                    this._photoService.getAlbums()
                        .subscribe(albums => {
                        this.isLoading = false;
                        this.albums = albums;
                    });
                }
            };
            AlbumsComponent = __decorate([
                core_1.Component({
                    template: `
        <h1>Albums</h1>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        <ul>
            <li *ngFor="#album of albums">
                <a [routerLink]="['Album', { id: album.id }]">
                    {{ album.title }}
                </a>
            </li> 
        </ul>
    `,
                    directives: [router_1.ROUTER_DIRECTIVES],
                    providers: [photo_service_1.PhotoService, http_1.HTTP_PROVIDERS]
                }),
                __metadata("design:paramtypes", [photo_service_1.PhotoService])
            ], AlbumsComponent);
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    };
});
//# sourceMappingURL=albums.component.js.map