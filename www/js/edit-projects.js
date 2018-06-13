/* eslint-env browser, jquery */

function deleteproject (id) {
    if(confirm('Are you sure you want to delete?')){
        $.post('/project/' + id + '/delete', function(){
            document.location.reload();
        });
    }
}

function populate(id) {

    $.get('/project/' + id, {}, function (project) {
        /*M.toast({
            html: 'Product Found ' + product.name
        });*/
        $('#edit-modal').modal('open');
        $('#modal-heading').html('Edit project');


        $('#project-description').val(project.description).focus();
        $('#project-cost').val(project.cost).focus();
        $('#project-owner').val(project.owner).focus();
        $('#project-url').val(project.url).focus();
        $('#project-name').val(project.name).focus();

        $('#project-form').attr('action', '/project/' + id + '/update');
        $('#delete-btn').attr('href', 'javascript:deleteproject("' + id + '");');

        //console.log(product._id)
    });


}

function clearproject() {


    $('#edit-modal').modal('open');
    $('#modal-heading').html('Create project');

    $('#project-description').val('').focus();
    $('#project-image').val('').focus();
    $('#project-cost').val('').focus();
    $('#project-owner').val('').focus();
    $('#project-url').val('').focus();
    $('#project-name').val('').focus();

    $('#project-form').attr('action', '/project/create');

    $('#delete-btn').attr('href', '!#');


}
