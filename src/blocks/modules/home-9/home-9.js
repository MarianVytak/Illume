import $ from 'jquery';

'use strict';

const home9Link = $('.home-9__list_item');
const home9Content = $('.home-9__img');

home9Link.on('click', function (e) {
    e.preventDefault();
    let thisContent = $(this).attr('data-target');
    home9Link.removeClass('active');
    $(this).addClass('active');
    home9Content.removeClass('active');
    home9Content.fadeOut();
    $(thisContent).addClass('active');
    $(thisContent).fadeIn();
});