import { Developer } from "./developer.model";
import { Publisher } from "./publisher.model";

export class Game {
    _id: string;
    name: string;
    description: string;
    releaseDate: string;
    platforms: string[];
    rating: number;
    developer: string;
    publisher: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
       }
}
