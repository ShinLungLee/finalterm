
$(".dropMenuBtn").click(function(){
    $(".panel").slideToggle();
});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 200) {
        $('.goTopBtn').fadeIn();
    } else {
        $('.goTopBtn').fadeOut();
    }
});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 200 ) {
        $('.asideArt').fadeIn();
    } else {
        $('.asideArt').fadeOut();
    }

    if (y > 250) {
        $('.asideTextArea').fadeIn();
    } else {
        $('.asideTextArea').fadeOut();
    }
});
$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 200 ) {
        $('.asideArtA').fadeIn();
    } else {
        $('.asideArtA').fadeOut();
    }

    if (y > 250) {
        $('.asideTextAreaA').fadeIn();
    } else {
        $('.asideTextAreaA').fadeOut();
    }
});
$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 200 ) {
        $('.asideArtB').fadeIn();
    } 

    if (y > 250) {
        $('.asideTextAreaB').fadeIn();
    } 
});

$(".asideArtA").mouseenter(function(){
    $('.asideArtA').toggleClass('scaleUp');
})
$(".asideArtA").mouseout(function(){
    $('.asideArtA').toggleClass('scaleDown');
})
$(".asideArtB").mouseenter(function(){
    $('.asideArtB').toggleClass('scaleUp');
})
$(".asideArtB").mouseout(function(){
    $('.asideArtB').toggleClass('scaleDown');
})




$("#signIn").click(function(){
    $("#form2").css('display','block');
    $("#form1").css('display','none');
});
$("#signUp").click(function(){
    $("#form1").css('display','block');
    $("#form2").css('display','none');
});
//顯示
document.getElementById("form2").style.display = "block"

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});