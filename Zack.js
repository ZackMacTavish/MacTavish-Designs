//Menu First ID

$('#Home').click(function () {
    location.href = "index.html";
});


//Menu Second ID

$('#Project').click(function () {
    location.href = "Mywork.html";
});


$('#About').click(function () {
    location.href = "About.html"; // will behave as if #3 is clicked.
});

$('#Contact').click(function () {
    location.href = "Contact.html"; // will behave as if #3 is clicked.
});
//Menu Second ID

$('button').on('click', function(){
    $('body').toggleClass('open');
  });


