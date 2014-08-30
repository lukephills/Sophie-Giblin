// var lineL1 = document.getElementById('lineL1');
// var lineR1 = document.getElementById('lineR1');


$('.title-text').waypoint(function() {
  $(this).removeClass('hidden');
}, {offset: '90%'});

$('.line').waypoint(function() {
  $(this).addClass('full');
}, {offset: '90%'});


