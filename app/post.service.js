System.register(['rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PostService;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            class PostService {
                constructor(_http) {
                    this._http = _http;
                    this.url = "https://jsonplaceholder.typicode.com/posts";
                }
                getPost() {
                    return this._http.get(this.url)
                        .map(res => res.json);
                }
                createPost(post) {
                    return this._http.post(this.url, JSON.stringify(post))
                        .map(res => res.json);
                }
            }
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=post.service.js.map