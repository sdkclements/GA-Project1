//




var posts = {
	source: [],
	aux: [],
	dist: []

}


class Disk {
    constructor(weight, post, position) {
        this.weight = weight;
        this.post = post;
        this.position = position;
//         this.element = let newDiv = $("<div></div>");
// $("body").append ( newDiv );
    }
}

function createNumDisks(num) {
    
    for (var i = -1; i = num; i++) {
        posts['source'].push(new Disk(num, 1, num))
        
        num--
    }
//console.log(posts['source'].reverse())
posts['source'].reverse();

}
createNumDisks(4);