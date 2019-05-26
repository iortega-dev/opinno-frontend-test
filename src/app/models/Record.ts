export interface Record {
    title: string;
    url: string;
}

export class RecordImpl implements Record {
    title: string;
    url: string;
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
}
