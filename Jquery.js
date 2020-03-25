$(document).ready(function () {


    /* Animations on Scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
     }, {
            offset: '50%'
        });


        // Home Page logo clicks to home page
        $('.LogoJs-1').click(function(){
          location.href = "Zack-Website.html";     //block of code that runs when the click event triggers
        });
        

   // Three Pillars Homepage + Details pages clickthrough to details page
        $('.ThreePillarsJs-1').click(function(){
            location.href = "ThreePillars-Details.html";     //block of code that runs when the click event triggers
          });

          // Three Pillars Projects page clickthrough to details page
        $('.Fuul-listed').click(function(){
            location.href = "ThreePillars-Details.html";     //block of code that runs when the click event triggers
          });

            // VaynerSports Home page + Details Pages clickthrough to details page
        $('.VaynerSportsJs-1').click(function(){
          location.href = "VaynerSports-Details.html";     //block of code that runs when the click event triggers
        });
        
        
          // Piton Fitness Home page + Details Pages clickthrough to details page
          $('.PitonFitnessJs-1').click(function(){
            location.href = "PitonFitness.html";     //block of code that runs when the click event triggers
          });

           // Fuul Home page + Details Pages clickthrough to details page
           $('.FuulJs-1').click(function(){
            location.href = "Fuul.html";     //block of code that runs when the click event triggers
          });

          // CCA Home page + Details Pages clickthrough to details page
          $('.CCAJs-1').click(function(){
            location.href = "CCA.html";     //block of code that runs when the click event triggers
          });

           // Loud Luxury Home page + Details Pages clickthrough to details page
           $('.LoudJs-1').click(function(){
            location.href = "LoudLuxury.html";     //block of code that runs when the click event triggers
          });

           // Loud Luxury Home page + Details Pages clickthrough to details page
           $('.BTVJs-1').click(function(){
            location.href = "BTV.html";     //block of code that runs when the click event triggers
          });

          // SeriousTools Home page + Details Pages clickthrough to details page
          $('.STJs-1').click(function(){
            location.href = "SeriousTools.html";     //block of code that runs when the click event triggers
          });





          
          
        
  


   
     
});