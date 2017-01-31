//--------------------------------
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
        $('#pol1').append(this.element);
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



$('#submit').click(function(e) {
    e.preventDefault()
    num = $('#disknum').val()
    createNumDisks(num)
})

/// this checks if the
$('.pole').click(function() {
    //console.log($(this).children().length)
    if ($('.disk').hasClass('activeDisk')) {
        var mover = $('.activeDisk')
        mover.appendTo(this)
        //mover.removeClass('activeDisk')

    }
})

// $('disk').click(function() {
//         if ($(this).hasClass(active)
//         })


// }

// if $('.disk').hasClass('activeDisk')

// function movePiece() {
// 	if ($('.disk').hasClass('activeDisk'))
// 		var mover = $('.activeDisk')
//     var movingDiv = $(mover).detatch()
//     movingDiv.appendTo(this)

//     $('.pole').click(function(){

//     })

//     else{
//     	console.log('no active disks')
//     }

//      var movingDisk = $('.activeDisk').detach()
//     movingDisk.appendTo('#pol2')

// }

// $(document).on('click', '.disc', function() {
//   if ((!isSelected) && ($(this).css('order') < ($(this).siblings('.disc').css('order')))) {
//       isSelected = true
//       $(this).addClass('selected')
//   }  else {
//     $('.selected').removeClass('selected')
//     isSelected = false
//   }
// }
// )
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