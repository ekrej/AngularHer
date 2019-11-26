

export class Game {
    _id: string;
    name: string;
    description: string;
    releaseDate: string;
    developer: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
       }
}
