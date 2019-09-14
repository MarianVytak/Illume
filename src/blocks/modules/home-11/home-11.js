import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

'use strict';

$('.home-11__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: false,
    adaptiveHeight: true
});