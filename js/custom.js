$('document').ready(function() {

  $('.fa-bars').click(function() {

    $('.daily-section').hide(3000, function() {
      $('.map-section').hide(3000, function() {
        $('.favourite-section').hide(3000, function() {
          $('.footer-section').hide(3000, function() {
            $('.daily-section').show(3000, function() {
              $('.map-section').show(3000, function() {
                $('.favourite-section').show(3000, function() {
                  $('.footer-section').show(3000, function() {

                  });
                });
              });
            });
          });
        });
      });
    });

  });
});
