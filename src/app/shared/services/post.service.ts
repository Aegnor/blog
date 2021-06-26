import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment} from '../../../environments/environment';

@Injectable()
export class PostService {
  constructor(private http: HttpClient) {
  }

  getPosts(start: number): Observable<any> {
    return this.http.get(`${environment.postsApiUrl}posts?_start=${start}&_limit=5`);
  }

  getPostById(id: string): Observable<any> {
    return this.http.get(`${environment.postsApiUrl}posts/${id}`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${environment.postsApiUrl}users/${id}`);
  }

  getAllCommentsByPostId(id: string): Observable<any> {
    return this.http.get(`${environment.postsApiUrl}posts/${id}/comments`);
  }
}
