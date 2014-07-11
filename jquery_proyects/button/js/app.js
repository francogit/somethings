//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1, Hide spoiler
$(".spoiler span").hide();
//2, Add a button
$(".spoiler").append("<button>BOTON</button>")
//3, When button pressed
$("button").click(function(){
    $(this).prev().show();
    $("spoiler span").show();
    $(this).remove();
});
  //3.1, Show spoiler next to the button clicked

  //3.2, Get rid of button
























































