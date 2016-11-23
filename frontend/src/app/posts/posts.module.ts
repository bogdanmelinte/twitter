import { NgModule } from '@angular/core/src/metadata/ng_module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { PostService } from './shared/post.service';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostSearchComponent } from './post-search/post-search.component';
import { PostsComponent } from './posts.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        ReactiveFormsModule

    ],
    declarations: [
        PostComponent,
        PostCreateComponent,
        PostSearchComponent,
        PostListComponent,
        PostsComponent
    ],

    providers: [
        PostService
    ],

    exports:[
        PostsComponent
    ]

})
export class PostsModule {
}