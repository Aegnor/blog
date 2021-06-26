import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PostService } from '../shared/services/post.service';
import { IPost } from '../shared/interfaces/posts.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  currentPage = 1;
  postsPagesCount: Array<number> = Array(20).fill(0).map((item, i) => {
    return i + 1;
  });
  posts: Array<IPost> | undefined;
  postServiceSubscriber: Subscription | undefined;
  postServicePaginationSubscriber: Subscription | undefined;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postsService: PostService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params: Params) => {
        if (params.page) {
          this.currentPage = +params.page;
        }
      },
      err => console.log(err)
    );

    const startLoadPostsFrom = 5 * this.currentPage - 5;

    this.postServiceSubscriber = this.postsService.getPosts(startLoadPostsFrom).subscribe(
      (posts) => {
        this.posts = posts;
      },
    err => console.log(err)
    );
  }

  ngOnDestroy(): void {
    this.postServiceSubscriber?.unsubscribe();
    this.postServicePaginationSubscriber?.unsubscribe();
  }

  onPagination(start: any): void {
    this.postServicePaginationSubscriber = this.postsService.getPosts(start).subscribe(
      (posts) => {
        this.posts = posts;
      },
      err => console.log(err)
    );
  }

}
