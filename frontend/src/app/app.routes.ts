import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NoContentComponent } from './core/no-content/no-content.component';
import { PostsComponent } from './posts/posts.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'posts', component: PostsComponent },

  { path: '**',    component: NoContentComponent },
];
