$("#buttonContainer").click(function() {
    $('html, body').animate({
        scrollTop: $("#highlight1").offset().top
      }, 800, function(){
        window.location.hash = "#highlight1";
      });
    window.setTimeout(autoScroll1, 7000);
});

function autoScroll1() {
	$('html, body').animate({
        scrollTop: $("#highlight2").offset().top
      }, 800, function(){
        window.location.hash = "#highlight2";
      });
	window.setTimeout(autoScroll2, 10000);
}

function autoScroll2() {
	$('html, body').animate({
        scrollTop: $("#highlight3").offset().top
    }, 800, function(){
        window.location.hash = "#highlight3";
    });
}