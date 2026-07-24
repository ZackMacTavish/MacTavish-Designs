$(document).ready(function () {

    // Toggle nav between grey (black hero) and white glass (light sections)
    var navEl = document.querySelector('nav');
    var animSectionEl = document.querySelector('.animation-section');
    function updateNavStyle() {
        if (!navEl || !animSectionEl) return;
        if (animSectionEl.getBoundingClientRect().bottom <= 60) {
            navEl.classList.add('nav--light');
            navEl.classList.remove('nav--dark');
        } else {
            navEl.classList.add('nav--dark');
            navEl.classList.remove('nav--light');
        }
    }
    updateNavStyle();
    $(window).on('scroll', updateNavStyle);
    function matchLineToText() {
        var textEl = document.querySelector('.My-Work-Text');
        var line = document.querySelector('.Line');
        if (!textEl || !line) return;

        // Measure only the rendered text width (not the full block width)
        var range = document.createRange();
        range.selectNodeContents(textEl);
        var rect = range.getBoundingClientRect();
        var textWidth = Math.round(rect.width);

        line.style.width  = textWidth + 'px';
        line.style.height = 'auto';
        line.style.display = 'block';
        // Shift line slightly left of the text
        line.style.marginLeft = '-10px';
    }
    matchLineToText();
    $(window).on('resize', matchLineToText);

    /* Animations on Scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
     }, {
            offset: '50%'
        });

        // Home Page logo clicks to home page
        $('.LogoJs-1').click(function(){
          location.href = "index.html";
        });

        // Three Pillars
        $('.ThreePillarsJs-1').click(function(){
            location.href = "ThreePillars-Details.html";
          });

        // VaynerSports
        $('.VaynerSportsJs-1').click(function(){
          location.href = "VaynerSports-Details.html";
        });

        // Piton Fitness
        $('.PitonFitnessJs-1').click(function(){
            location.href = "PitonFitness.html";
          });

        // Fuul
        $('.FuulJs-1').click(function(){
            location.href = "Fuul.html";
          });

        // CCA
        $('.CCAJs-1').click(function(){
            location.href = "CCA.html";
          });

        // Loud Luxury
        $('.LoudJs-1').click(function(){
            location.href = "LoudLuxury.html";
          });

        // Better Tomorrow Ventures
        $('.BTVJs-1').click(function(){
            location.href = "BTV.html";
          });

        // Serious Tools
        $('.STJs-1').click(function(){
            location.href = "SeriousTools.html";
          });

});
