import { Injectable } from '@angular/core';
import { Post } from '../models/Posts';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    // dummpy data
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=10"); 
  }
}