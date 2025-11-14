$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");

    div.animate({left: '200px'}, 1000)

    div.animate({height: '500px', opacity: '0.4'}, 1000, function(){
        div.css("background-color", "#CBD99B")
    });
    div.animate({width: '500px', opacity: '0.8'}, 1000, function(){
        div.css("background-color", "#70B2B2")
    });
    div.animate({height: '200px', opacity: '0.4'}, 1000, function(){
        div.css("background-color", "#16476A")
    });
    div.animate({width: '200px', opacity: '0.8'}, 1000, function(){
        div.css("background-color", "#f70505ff")
    });

    div.animate({left: '50px'}, 1000)
  });
});