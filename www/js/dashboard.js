function viewenquiry(id) {

    $.get('/enquiry/' + id, {}, function (enquiry) {
        /*M.toast({
            html: 'Enquiry Found ' + enquiry.name
        });*/


        $('#enquiry-name').html(enquiry.name);
        $('#enquiry-date').html(enquiry.date);

        $('#enquiry-email').html(enquiry.email);
        $('#enquiry-phone').html(enquiry.phone);
        $('#enquiry-email').attr('href','mailto:' + enquiry.email);
        $('#enquiry-phone').attr('href','phone:' + enquiry.phone);

        $('#enquiry-comment').html(enquiry.comment);

        $('#enquiry-modal').modal('open');

        //console.log(product._id)
    });


}
