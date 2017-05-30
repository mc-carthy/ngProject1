System.register(["angular2/core", "angular2/http", "rxjs/Observable", "rxjs/add/observable/forkJoin", "./github.service"], function (exports_1, context_1) {
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
    var core_1, http_1, Observable_1, github_service_1, GithubProfileComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }
        ],
        execute: function () {
            GithubProfileComponent = class GithubProfileComponent {
                constructor(_githubService) {
                    this._githubService = _githubService;
                    this.isLoading = true;
                    this.username = "octocat";
                    this.user = {};
                    this.followers = [];
                }
                ngOnInit() {
                    Observable_1.Observable.forkJoin(this._githubService.getUser(this.username), this._githubService.getFollowers(this.username))
                        .subscribe(res => {
                        this.user = res[0];
                        this.followers = res[1];
                    }, null, () => { this.isLoading = false; });
                }
            };
            GithubProfileComponent = __decorate([
                core_1.Component({
                    selector: 'github-profile',
                    styles: [
                        `
            .avatar {
                width: 100;
                height: 100;
                border-radius: 100%;
            }
        `
                    ],
                    template: `
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>
        <h2>@{{ user.login }}</h2>
        <a href="{{ user.html_url }}" target="_blank">
            <img class=avatar src="{{ user.avatar_url }}">
        </a>

        <h3>Followers</h3>
        <div *ngFor="#follower of followers" class="media">
            <div class="media-left">
                <a href="{{ follower.html_url }}" target="_blank">
                    <img class="media-object avatar" src="{{ follower.avatar_url }}" alt="...">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ follower.login }}</h4>
            </div>
        </div>
    `,
                    providers: [http_1.HTTP_PROVIDERS, github_service_1.GithubService]
                }),
                __metadata("design:paramtypes", [github_service_1.GithubService])
            ], GithubProfileComponent);
            exports_1("GithubProfileComponent", GithubProfileComponent);
        }
    };
});
//# sourceMappingURL=github-profile.component.js.map