import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return [
      {
        id: 1,
        title: "My first post",
        body: "I love posting",
        votes: 1
      },
      {
        id: 2,
        title: "My second post",
        body: "I love posting again",
        votes: 2
      },
      {
        id: 3,
        title: "Just regular posts",
        body: "going to party !",
        votes: 2
      }
    ];
  }
}
