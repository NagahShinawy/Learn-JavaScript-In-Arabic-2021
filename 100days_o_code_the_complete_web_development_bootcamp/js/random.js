import {IndexError} from './errors.js';

class Random {
    EMPTY = 0;
    choice(items){
        if (items.length === this.EMPTY){
            throw new IndexError().MESSAGE;
        }
        let index = Math.floor(Math.random() * items.length);
        return items[index];
    }

}