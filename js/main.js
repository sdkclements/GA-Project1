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
        // this.element = $("<div> div test</div>");
        // $("body").append ( this.element );
        // this.element.addEventListener('click', this, false)

        // Disks.protoype.handleEvent = function(e) {
// 	switch (e.type) {
// 		case 'click': this.click(e);
// 		//Add other types of event listeners here if i need to
// 	}
// }
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

// example of the weight of the first element in object array
console.log(posts['source'][0].weight)
console.log(posts)

// function checkRow(arr, toAdd) {
//     if (arr.length > 0) && (arr[0].weight > toAdd.weight) {
//         //piece can be inserted at the begining of the array
//     }

//     else
//     //piece cannot go here
// }