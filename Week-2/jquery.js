$(document).ready(function() {
    $("#hider").click(function() {
     $("#para").hide(1000);
    });
$("#shower").click(function() {
    $("#para").show(1000);
});

$("#toggler").click(function() {
    $("#toggling").toggle(1000);
});

$("#ftoggler").click(function() {
    $("#ftoggling1").fadeToggle();
    $("#ftoggling2").fadeToggle(1000);
});

$(".class1").dblclick(function() {
    $(this).toggleClass("class2")
});


$("#getb").click(function(){
    $.get("asp_get.asp", function(text, status){
      window.alert("Text: "+ text+"\nStatus: "+status);
    });
  });

  $("#postb").click(function(){
    $.post("asp_post.asp",
    {
         place: "Amsterdam"

    },
    function(data, status){
      alert("Text: " + data + "\nStatus: " + status);

    });
  });
});