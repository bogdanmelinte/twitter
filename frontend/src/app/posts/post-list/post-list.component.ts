import { Component, OnInit, OnChanges } from '@angular/core';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { Input } from '@angular/core/src/metadata/directives';
import { EmitterService } from '../../shared/emitter.service';

@Component({
    selector: 'post-list',
    template: require('./post-list.component.html'),

})

export class PostListComponent implements OnInit, OnChanges{

    constructor(
        private postService: PostService
    ){}

    posts: Post[];

    @Input() listId: string;
    @Input() editId: string;

    loadPosts(){
        this.postService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                err => {
                    console.log(err);
                });
    }

    ngOnInit(){
        this.loadPosts()
    }


    ngOnChanges(changes:any) {
        EmitterService.get(this.listId).subscribe((posts:Post[]) => {this.posts = posts});
    }

}