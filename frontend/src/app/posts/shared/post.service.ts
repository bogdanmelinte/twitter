import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable()
export class PostService {

    private url = 'http://twitter-backend.dev/posts';

    constructor (private http: Http) {}

    // Fetch all existing posts
    getPosts(): Observable<Post[]>{
        return this.http.get(this.url)
            .map((res:Response) => res.json().posts)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

    }

    // Fetch all posts matching a specific tag
    getPostsByTag(tag: string): Observable<Post[]> {
        return this.http.get(this.url + '?where={"tag":{"e":"' + tag + '"}}')
            .map((res:Response) => res.json().posts)
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Add a new post
    addPost (body: Object): Observable<Post[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url, body, options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    // Update a post
    updatePost (body: Object): Observable<Post[]> {
        let bodyString = JSON.stringify(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.put(`${this.url}/${body['id']}`, body, options)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
    // Delete a post
    removePost (id:string): Observable<Comment[]> {
        return this.http.delete(`${this.url}/${id}`)
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}