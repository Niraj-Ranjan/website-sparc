/* eslint-env browser, jquery */

function enquire(id) {

    var username = localStorage.getItem('username');
    var email = localStorage.getItem('email');
    var phone = localStorage.getItem('phone');

    $.get('/product/' + id, function (product) {
        M.toast({
            html: 'Product Found ' + product.name
        });
    });


}



/* eslint-env browser, jquery */

(function ($) {
    $(function () {

        

        // Masonry Grid
        var $masonry = $('.shop');
        $masonry.masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.shop-item',
            // use element for option
            columnWidth: '.shop-item',
            // no transitions
            transitionDuration: 0
        });
        // layout Masonry after each image loads
        $masonry.imagesLoaded(function () {
            $masonry.masonry('layout');
        });
        $('a.filter').click(function (e) {
            e.preventDefault();
        });




    }); // end of document ready
})(jQuery); // end of jQuery name space