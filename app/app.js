//animating the web image on home page
$(window).on('load', function(){
    var $svg = $('svg').drawsvg({
        duration:4000
    });
    $svg.drawsvg('animate');
});

//animating the text on home page
$(window).on('load', function(){
    $('.demo').textyle({
        duration:300,
    });
});

//animating the logo
$('.logo a').on('mouseover', function(){
    $(this).addClass('animated flip').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass('animated flip');
    });
});

//adding class to the nav when scrolling
$(function(){
    $(window).scroll(function() {
       if($(window).scrollTop() >= 100) {
         $('nav').addClass('scroll');
       }
      else {
        $('nav').removeClass('scroll');
      }
  } );
});

//adding animation to about section when scrolling
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview({
			animation: 'fadeInRight',
        });
        
        $('.fromLeft').anisview({
            animation: 'fadeInLeft',
        });
	});
});

//adding animation to the cool stuff section when scrolling
$(function(){
    $(window).on('scroll resize', function(){
        $('.animatepls').anisview({
            animation: 'zoomIn'
        })
    })
})

//make and animate the bar graphs for skills section
$(function(){
    $('.html').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.css').rProgressbar({
        percentage: 90,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.javascript').rProgressbar({
        percentage: 75,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.php').rProgressbar({
        percentage: 60,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.react').rProgressbar({
        percentage: 60,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.angular').rProgressbar({
        percentage: 55,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.photoshop').rProgressbar({
        percentage: 85,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.illustrator').rProgressbar({
        percentage: 45,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.adobe-xd').rProgressbar({
        percentage: 80,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.github').rProgressbar({
        percentage: 70,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.cooking').rProgressbar({
        percentage: 45,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });

    $('.fixing-my-car').rProgressbar({
        percentage: 20,
        fillBackgroundColor: '#BCB7BB',
        height:'3.5vh',
        width:'95%'
    });
});

//adding the anchor scroll jquery thingy uwu
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    console.log("hell yeah");
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});