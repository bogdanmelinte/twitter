import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { PostService } from '../shared/post.service';
import { Input } from '@angular/core/src/metadata/directives';
import { EmitterService } from '../../shared/emitter.service';

@Component({
    selector: 'post-search',
    template: require('./post-search.component.html')
})
export class PostSearchComponent implements OnInit, OnChanges {
    postSearchForm: FormGroup;

    @Input() editId: string;
    @Input() listId: string;

    constructor(
        private formBuilder: FormBuilder,
        private postService: PostService
    ) {}

    ngOnInit(): void {
        this.postSearchForm = this.formBuilder.group({
            tag: ['', Validators.required]
        });
    }

    onSubmit(): void {
        this.postService.getPostsByTag(this.postSearchForm.controls['tag'].value)
            .subscribe(
                posts => EmitterService.get(this.listId).emit(posts),
                err => {
                    console.log(err);
                });
    }

    ngOnChanges() {
        EmitterService.get(this.listId).subscribe(
            () => {
                this.postSearchForm.reset();
            });
    }
}
