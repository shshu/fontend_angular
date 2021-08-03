export class Post {
    id: number;
    title: string;
    body: string;
    votes: number;

    constructor(title: string = 'title', body: string = 'body') {
        this.id = 0;
        this.title = title;
        this.body = body;
        this.votes = 0;
    }

}