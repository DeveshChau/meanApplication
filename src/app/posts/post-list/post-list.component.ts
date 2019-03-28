import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  // posts = [
  //   {title: 'First Post', description: 'Description for first post'},
  //   {title: 'second Post', description: 'Description for second post'},
  //   {title: 'Third Post', description: 'Description for Third post'}
  // ];
  @Input() posts: Post[] = [];
}
