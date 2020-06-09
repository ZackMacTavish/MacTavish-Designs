//Menu First ID

$('#1').click(function () {
    location.href = "index2.html";
});

$('.1').click(function(){
    $('1').trigger('click'); // will behave as if #1 is clicked.
});


//Menu Second ID

$('#2').click(function () {
    location.href = "Mywork.html";
});

$('.2').click(function(){
    $('2').trigger('click'); // will behave as if #2 is clicked.
});

$('#3').click(function () {
    location.href = "About.html"; // will behave as if #3 is clicked.
});

$('#4').click(function () {
    location.href = "Contact.html"; // will behave as if #3 is clicked.
});
//Menu Second ID


//Open Menu Click

$('button').on('click', function(){
  $('body').toggleClass('open');
});

