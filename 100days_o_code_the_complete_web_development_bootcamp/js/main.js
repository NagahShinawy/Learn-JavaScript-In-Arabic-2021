console.log("Hello!");
let welcome = "Hello JS";
// alert("Js Bootcamp");
// alert(32);
// alert(welcome);

class IndexError{
    MESSAGE = "Cannot choose from an empty sequence";
}


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


let greetings = ["Welcome JS", "Hi JS Bootcamp", "Welcome Web Developer"]
// let greetings = []
for (let i = 0; i < 10; i++) {
    console.log(new Random().choice(greetings));
}
