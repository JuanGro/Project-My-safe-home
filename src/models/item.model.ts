export class Item {
    public id: number;
    public type: string;
    public date: string;
    public location: string;
    public image: string;

    constructor(json?) {
        if (json) {
            this.id = json.id;
            this.type = json.type;
            this.date = json.date;
            this.location = json.location;
            this.image = json.image;
        }
    }
}