//--------------------------------
// As of yet unresolved issues:
// Still want to add drag functionality.
// Still need to set the input number to a variable i can reference in regards to score.
// Still need to set up a winning situation.
// 
$(document).ready(function() {
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
            this.element = $(`<div class='disk' data-weight=${weight}> Disk: ${weight}</div>`);
            $('#pol1').append(this.element);

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

    }
    $('#submit').click(function(e) {
        e.preventDefault()
        num = $('#disknum').val()
        $('.pole').empty()
        createNumDisks(num)
    })

    $('.pole').click(function() {
        //console.log($(this).children().length)
        //define a variable that will return 0 if the div is empty and 
        //else it will return the num of the first object in the array
        //then remove class active.
        var polEl = $(this).children().length
        console.log(polEl)
        var distLength = $(this).children().length 
        var lastinRow = $(this).children().last() 
        //var weightTop = $(this).children().last().data().weight
        //var active = $('.activeDisk').data().weight

        if ($('.disk').hasClass('activeDisk'))  {
            var mover = $('.activeDisk')
            mover.appendTo(this)


        }
        //mover.removeClass('activeDisk')
        // var $dvElement = $('#dvElement');
        //if (!$dvElement.length)  // OR !$.isEmptyObject($dvElement)

    })

});