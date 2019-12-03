$(document).ready(function() {
  $('.ui.dropdown').dropdown();

 $('.ui .rating')
  .rating({
    initialRating: 0,
    maxRating: 5,
  });
 $('.ui .rating')
  .rating('disable'
  );

});


