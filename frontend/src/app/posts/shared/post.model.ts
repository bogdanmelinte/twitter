export class Post {
    id: number;
    text: string;
    tag: string;

    constructor (
        text: string,
        tag: string
    ) {
        this.text = text;
        this.tag = tag;
    }
}