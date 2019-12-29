$(document).ready(function () {
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


$('.dropdown').dropdown();

$('.ui.sidebar')
  .sidebar('toggle')
;

// using context
$('.context.example .ui.sidebar')
  .sidebar({
    context: $('.context.example .bottom.segment')
  })
  .sidebar('attach events', '.context.example .menu .item')
;
