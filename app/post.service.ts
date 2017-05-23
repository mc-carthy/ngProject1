import {Http} from 'angular2/http';
import 'rxjs/add/operator/map'

export class PostService {

    private url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http)
    {

    }

    getPost()
    {
        return this._http.get(this.url)
        .map(res => res.json);
    }

    createPost(post)
    {
        return this._http.post(this.url, JSON.stringify(post))
            .map(res => res.json);
    }
}