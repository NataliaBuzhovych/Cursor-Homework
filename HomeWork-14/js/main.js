'use strict';

console.log('test');
$(document).ready(function () {
           $('.one-time').slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                adaptiveHeight: true
        });
			
});

