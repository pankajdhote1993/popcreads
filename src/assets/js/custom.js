function loadCarousel(){
    console.log('Coming one');
    $('.owl-carousel').owlCarousel({
        loop: false,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: false,
        margin: 30,
        navText: [
            '<i class="fas fa-angle-left" aria-hidden="true"></i>',
            '<i class="fas fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992:{
                items:3,
            },
            1200: {
                items: 6,
            }
        }
    });
    //this.openModalPopup(); 
    
 
    
    $(".movie-poster" )
    .mouseover(function() {
        if ($(window).width() > 960) {
            $('.owl-item').css('z-index','-99');
            $('.overlay').css('width','160%');
            $('.overlay').css('height','320px');
            $(this).closest('.owl-item').css('z-index','99');
            $('.owl-item').css('filter','blur(8px)');
            $(this).closest('.owl-item').css('filter','blur(0px)');

           // $('.overlay').css('backdrop-filter','blur(5px)');
            // $(this).closest('.overlay').css('width','500px!important');
            
            //var totalItems = $('.owl-item.active').last();
            //$(totalItems).closest('.movie-poster').find('.overlay').css('width','100%');
            $('.owl-item').removeClass('lastActiveItem1');
            $('.owl-item').removeClass('lastActiveItem2');
            $('.owl-item').removeClass('lastActiveItem3');
            var total1 = 4;
            var total2 = 4;
            var total3 = 4;
            $('#Hindi .owl-stage .owl-item.active').each(function(index){
                if (index === total1 - 1 && total1>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem1');
                }
            });
            $('#Tamil .owl-stage .owl-item.active').each(function(index){
                if (index === total2 - 1 && total2>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem2');
                    //$('#Tamil .owl-stage .owl-item.active').last().addClass('lastActiveItem2');
                }
            });
            $('#Telugu .owl-stage .owl-item.active').each(function(index){
                if (index === total3 - 1 && total3>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem3');
                }
            });

            //hindi page all movies
            $('#Hindiu .owl-stage .owl-item.active').each(function(index){
                if (index === total3 - 1 && total3>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem3');
                }
            });
            //tamil page all movies
            $('#Tamilu .owl-stage .owl-item.active').each(function(index){
                if (index === total3 - 1 && total3>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem3');
                }
            });
            //telugu page all movies
            $('#Teluguu .owl-stage .owl-item.active').each(function(index){
                if (index === total3 - 1 && total3>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem3');
                }
            });


            //hindi page all movies
            $('#Hindiom .owl-stage .owl-item.active').each(function(index){
                if (index === total3 - 1 && total3>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem3');
                }
            });
            //tamil page all movies
            $('#Tamilom .owl-stage .owl-item.active').each(function(index){
                if (index === total3 - 1 && total3>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem3');
                }
            });
            //telugu page all movies
            $('#Teluguom .owl-stage .owl-item.active').each(function(index){
                if (index === total3 - 1 && total3>1) {
                    // this is the last one
                    $(this).addClass('lastActiveItem3');
                }
            });
        }    
    })
    .mouseout(function() {
        $('.overlay').css('width','100%'); 
        $('.overlay').css('height','100%'); 
        $('.owl-item').css('filter','blur(0px)');
    });

}
function openModalPopup(){
    console.log('Coming two');
    $(".movie-poster").hover(function () {
        var movie_id = $(this).closest('div').find('input[name="movie_id"]').val();
        console.log(movie_id);
        var movie_name = $('#movie_name_'+movie_id).val();
        var movie_hover_image = $('#movie_hover_'+movie_id).val();
        var description = "Description of movie";
        $('#modal_movie_name').html(movie_name);
        $('#background-section').css('background','url('+movie_hover_image+') 0% 45% / cover no-repeat');
        $('#modal_description').html(description);
        $('#myModal').modal({
            show: true,
            backdrop: true
        });
    });
}

function loadImdbRatingMulti(data,num){
    $('#imdb_rating_'+num).append(data);
  }
  
function loadImdbRating(data){
    $('#imdb_rating').append(data);
  }

function applySlider(){
    // console.log('Working slider');
    //$('.brand-active').slick('unslick'); //terminates (only run if slick is initialized)
    //update view now
    $(".brand-active").not('.slick-initialized').slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            arrows: false,
            slidesToShow: 6,
            slidesToScroll: 2,
            lazyLoad: 'ondemand',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ]
        });
  }