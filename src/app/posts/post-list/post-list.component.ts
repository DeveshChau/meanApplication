import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

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
  private postsSub: Subscription;
  constructor(public postService: PostService) {}
  
  ngOnInit() {
    this.postService.getPosts()
    this.postsSub = this.postService.getPostUpdateListner()
    .subscribe((posts: Post[])=>{
      this.posts = posts
    })
  }
  onDelete(postId:string){
    this.postService.deletePost(postId)
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
