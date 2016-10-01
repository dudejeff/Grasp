jQuery('#eduForm2').submit(function(e) {
    var form = jQuery(this);
    var data = form.serialize();
    e.preventDefault();

    jQuery.ajax({
        url: "/beta/register",
        type: 'post',
        data: data,
        dataType: 'json',
        statusCode: {
            200: function () {
                $(".eduEmail").css("visibility", "hidden");
                $(".success").css("visibility", "visible");
            }
        },
        error: function() {
            $(".eduEmail").effect("shake");
        }
    });
});