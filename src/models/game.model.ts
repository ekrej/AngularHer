

export class Game {
    _id: string;
    name: string;
    releaseDate: string;
    developer: string;
    categorie: [string];

    constructor(values: Object = {}) {
        Object.assign(this, values);
       }
}
