export class Serie {
    constructor(public id: number, public name: string, public channel: string, public seasons: number, public description: string, public link: string, public image: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}
