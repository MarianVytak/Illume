import $ from 'jquery';

'use strict';

const cardLink = $('.card_link');
const cardContent = $('.card_content');

cardLink.on('click', function (e) {
    e.preventDefault();
    let thisContent = $(this).attr('href');
    cardContent.removeClass('active');
    cardContent.fadeOut();
    $(thisContent).addClass('active');
    $(thisContent).fadeIn();
});