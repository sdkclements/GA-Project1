//




var posts = {
    source: [],
    aux: [],
    dist: []

}
// function createBoard(){
// 	var pole = $(`<div class='pole'> pole One </div>`)
// 	$('.mainContainer').append

// }


class Disk {
    constructor(weight, post, position) {
        this.weight = weight;
        this.post = post;
        this.position = position;
        this.element = $(`<div class='disk' data-weight=${weight}> Disk: ${weight}</div>`);
        $('#pol1').append ( this.element );
        // this.addEventListener('click', function(e) {
        // 	console.log(e)
        // })

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
    	var disk = new Disk(num, 1, num)
        posts['source'].push(disk)
        num--
    }
    $('.disk').on('click', function(e) {
    	console.log(this)
    	$(this).toggleClass('activeDisk')
    })
    //console.log(posts['source'].reverse())
    // posts['source'].reverse();

}
createNumDisks(4);


 $('#button').click(function() {
    console.log($('#disknum').val());
})

// example of the weight of the first element in object array
// console.log(posts['source'][0].weight)
// console.log(posts)

// function checkRow(arr, toAdd) {
//     if (arr.length > 0) && (arr[0].weight > toAdd.weight) {
//         //piece can be inserted at the begining of the array
//     }

//     else
//     //piece cannot go here
// }