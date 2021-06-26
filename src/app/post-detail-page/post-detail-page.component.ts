import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { PostService } from '../shared/services/post.service';
import { IAuthor, IComment, IPost } from '../shared/interfaces/posts.interface';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.scss']
})
export class PostDetailPageComponent implements OnInit {
  postId!: string;
  post$!: Observable<IPost>;
  author$!: Observable<IAuthor>;
  comments$!: Observable<Array<IComment>>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.postId = params.id;
      },
      err => console.log(err)
    );

    // @ts-ignore
    this.post$ = this.postService.getPostById(this.postId).pipe(catchError(error => {
      console.log(error);
      return of();
    }));
    // @ts-ignore
    this.author$ = this.postService.getUserById(this.postId).pipe(catchError(error => {
      console.log(error);
      return of();
    }));
    // @ts-ignore
    this.comments$ = this.postService.getAllCommentsByPostId(this.postId).pipe(catchError(error => {
      console.log(error);
      return of();
    }));
  }

}
