/* eslint-env browser, jquery */

function enquire(id) {

    $.get('/product/' + id, function (product) {
        M.toast({
            html: 'Product Found ' + product.name
        });
    });


}
