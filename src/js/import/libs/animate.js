import WOW from 'wow.js'

'use strict';

const wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: false,
        live: true
});
wow.init();