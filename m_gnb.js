$(document).ready(function(){
    $(".menu_icon").click(function(){
        let windowHeight = $(window).height(1);
        $("#gnb").css('height',windowHeight);
        $("#gnb").animate({top:"0", opacity: "1"},"slow");
    });
    $(".close_btn").click(function(){
        $("#gnb").animate({top:"-100%", opacity: "0"},"slow");
    });
});

$(document).ready(function(){
  $("#gnb .depth").click(function(){
    $('.sub_menu').hide();
    $(this).next(".sub_menu").slideDown('slow');
  });
});