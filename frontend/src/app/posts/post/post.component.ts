import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { PostService } from '../shared/post.service';
import { Post } from '../shared/post.model';
import { EmitterService } from '../../shared/emitter.service';

@Component({
    selector: 'post',
    template: require('./post.component.html')
})

export class PostComponent {

    constructor(
        private postService: PostService
    ) {}

    @Input() post: Post;
    @Input() listId: string;
    @Input() editId:string;

    editPost() {
        EmitterService.get(this.editId).emit(this.post);
    }

    deletePost(id:string) {
        this.postService.removePost(id).subscribe(
            () => {
                this.postService.getPosts()
                    .subscribe(
                        posts => EmitterService.get(this.listId).emit(posts),
                        err => {
                            console.log(err);
                        });
            },
            err => {
                console.log(err);
            });
    }
}