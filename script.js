$(".Part-Two-Yes").hide();
$(".yes-button").click(function() {
    $(".firstclass").hide();
    $(".Part-Two-Yes").fadeIn();
    
    
});

$(".no-button").click(function() {
    $(".firstImage").hide();
    $(".title").hide();
    $(".yes-button").hide();
    $(".no-button").hide();
    $(".help").hide();
    $(".bye").fadeIn();
    $(".restart").fadeIn();
  
});
$(".bye").dblclick(function(){
    $(".firstImage").show();
    $(".title").show();
    $(".yes-button").show();
    $(".no-button").show();
    $(".help").show();
    $(".bye").hide();
    $(".restart").hide();
});
$(".map1").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("Bacon Man Flew Away To Another Game ");
    $(".hide1").text("*Hover Over Bacon Man To See Where He Traveled*");
    $("body").css("background-image","url(https://tr.rbxcdn.com/685c0144c0604732ae6f5a2f1e0b9ffd/500/280/Image/Jpeg)");
    $(".fly").show();
});
$(".map2").click(function(){
    $(".maps").fadeOut();
    $(".hide").text("Bacon Man Died ");
    $(".hide1").hide();
    $("body").css("background-image","url(https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/d/5/7/d57d4d061a893444576f1352c49a9d51e10c2847.png)");
    $(".end").slideDown("slow");
    $(".restart1").slideDown("slow");
    
});
$(".fly").mouseenter(function(){
    $(".hide").text("Bacon Man Must Fight The Monsters!");
    $(".hide1").text("*Double Click Bacon Man To Enter*");
    $("body").css("background-image","url(https://tr.rbxcdn.com/c7a37241bf9d3436bb1aa080a01d249d/500/280/Image/Jpeg)");
});
$(".fly").dblclick(function(){
    $(".hide").text("Bacon Man Must Punch Them All");
    $(".hide1").text("*Unhover Over Bacon Man To Deafeat*");
    $("body").css("background-image","url(https://tr.rbxcdn.com/0713ec25012458c36cbe31e88f4617ad/500/280/Image/Jpeg)");
});
$(".fly").mouseleave(function(){
    $("body").css("background-image","url(https://tr.rbxcdn.com/3cf53a3bbd54c94581ae8fb8c28aa0c8/500/280/Image/Jpeg)");
    $(".fly").hide();
    $(".end").show();
    $(".hide1").text("Click Text To Toggle Bacon Man");
    $(".hide").text("Bacon Man Can Now Be Home");
});
$(".hide").click(function(){
    $(".end").toggle();
});


