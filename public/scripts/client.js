var mathObj = {
  x: 0,
  y: 0,
  operator: ''
};

$(document).ready(function () {
  console.log('js calc is ready!');

  //event listeners for buttons
  $('#submit').on('click', calculate);
  $('#clear').on('click', clear);


  $('.operator').on('click', function() {
    event.preventDefault();
    // ('button').effect("highlight", {color: "#669966"}, 3000);
    console.log("inside click event");
    mathObj.x = $('#x').val();
    mathObj.y = $('#y').val();
    mathObj.operator = $(this).attr('id');
    console.log(mathObj);


});


});//end of doc.ready




//fnc to calculate
function calculate() {
  event.preventDefault();
  var formData = $(this).serializeArray();
  console.log(formData);
  clear();

  $.ajax({
    type: 'POST',
    url: '/calc',
    data: (mathObj),
    success: function(response) {
      console.log(response.result);
      $('#result').append(response.result);
    }
  });

}//end of cal fnc



//fnc to clear
function clear () {
$('#x').empty();
$('#y').empty();
$('#result').empty();

}
