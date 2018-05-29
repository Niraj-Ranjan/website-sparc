function populate(id) {

    $.get('/product/' + id, {}, function (product) {
        /*M.toast({
            html: 'Product Found ' + product.name
        });*/
        $('#edit-modal').modal('open');

        $('#product-description').val(product.description).focus();
        $('#product-cost').val(product.cost).focus();
        $('#product-name').val(product.name).focus();

        $('#product-form').attr('action', '/product/' + id + '/update');



        //console.log(product._id)
    });


}
