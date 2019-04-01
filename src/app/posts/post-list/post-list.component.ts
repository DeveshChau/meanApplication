import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'First Post', description: 'Description for first post'},
  //   {title: 'second Post', description: 'Description for second post'},
  //   {title: 'Third Post', description: 'Description for Third post'}
  // ];
  posts: Post[] = [];
  constructor(public postService: PostService) {}
  ngOnInit() {
    this.posts = this.postService.getPosts()
    this.postService.getPostUpdateListner()
    .subscribe((posts: Post[])=>{
      this.posts = posts
    })
  }
}
