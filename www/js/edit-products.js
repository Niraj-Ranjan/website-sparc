/* eslint-env browser, jquery */

function populate(id) {

    $.get('/product/' + id, {}, function (product) {
        /*M.toast({
            html: 'Product Found ' + product.name
        });*/
        $('#edit-modal').modal('open');
        $('#modal-heading').html('Edit product');

        $('#product-description').val(product.description).focus();
        $('#product-cost').val(product.cost).focus();
        $('#product-name').val(product.name).focus();

        $('#product-form').attr('action', '/product/' + id + '/update');
        $('#delete-btn').attr('href', '/product/' + id + '/delete');

        //console.log(product._id)
    });


}

function clearproduct() {


    $('#edit-modal').modal('open');
    $('#modal-heading').html('Create product');

    $('#product-description').val('').focus();
    $('#product-image').val('').focus();
    $('#product-cost').val('').focus();
    $('#product-name').val('').focus();

    $('#product-form').attr('action', '/product/create');
    
    $('#delete-btn').attr('href', '!#');


}

