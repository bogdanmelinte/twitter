import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmitterService } from '../../shared/emitter.service';
import { Input } from '@angular/core/src/metadata/directives';
import { Post } from '../shared/post.model';
import { Observable } from 'rxjs';
import { PostService } from '../shared/post.service';

@Component({
    selector: 'post-create',
    template: require('./post-create.component.html')
})
export class PostCreateComponent implements OnInit, OnChanges {

    postCreateForm: FormGroup;

    private model = new Post('', '');
    private editing = false;

    @Input() editId: string;
    @Input() listId: string;

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService
    ) {}

    ngOnInit(): void {
        this.postCreateForm = this.formBuilder.group({
            text: ['', [Validators.required, Validators.minLength(5)]],
            tag: ['', Validators.required]
        });
    }

    submitPost(): void {
        let postOperation: Observable<Post[]>;

        if (!this.editing) {
            postOperation = this.postService.addPost(this.model)
        } else {
            postOperation = this.postService.updatePost(this.model)
        }

        postOperation.subscribe(
            () => {
                this.postService.getPosts()
                    .subscribe(
                        posts => EmitterService.get(this.listId).emit(posts),
                        err => {
                            console.log(err);
                        });

                this.model = new Post('', '');

                if(this.editing) this.editing = !this.editing;
            },
            err => {
                console.log(err);
            });
    }

    ngOnChanges() {
        EmitterService.get(this.editId).subscribe(
            (post: Post) => {
                this.model = post;
                this.editing = true;
            });
    }
}
