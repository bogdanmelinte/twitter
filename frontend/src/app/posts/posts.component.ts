import { Component } from '@angular/core';

@Component({
    selector: 'posts',
    template: require('./posts.component.html')
})
export class PostsComponent {

    private listId = 'POST_COMPONENT_LIST';
    private editId = 'POST_COMPONENT_EDIT';

}
