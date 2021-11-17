function helloWorld(){
    return 'Hello World.';
}

function addition(x, y){
    return x + y;
}

class game{
    constructor(title, genre){
        this.title = title;
        this.genre = genre;
        this.ad = function(){
            return "Buy " + this.title + " now!!";
        }
    }
}

module.exports = {
    helloWorld,
    addition,
    game
}
