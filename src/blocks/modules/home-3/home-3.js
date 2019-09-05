import $ from 'jquery';
import '../../../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min';
import '../../../../node_modules/dragscroll/dragscroll';

// Custom Scrollbar.
$(window).on('load', function () {
    $('.home-3__slider').mCustomScrollbar({
        theme: 'minimal-dark',
        horizontalScroll: true,
        mouseWheel: {
            enable: false
        }
    });

    // Scroll by Dragging. https://github.com/asvd/dragscroll
    $('.mCustomScrollBox').addClass('dragscroll');
});