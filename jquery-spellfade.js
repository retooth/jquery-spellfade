$.fn.spellFadeIn = function (duration, letterduration){

  var settings = $.extend({
      duration: 800,
      letterduration: 200,
  }, {duration: duration, letterduration: letterduration} );

  return this.each(function(){
    if ($(this).children("[id*='__spellfade']").length > 0){ return } // block, if spellfade is still in motion
    var html = $(this).html();
    var duration_per_letter = settings.duration / html.length;
    $(this).html("");
    $(this).fadeIn(0);
    for (var i=0; i<html.length;i++){
        var newletter = $("<span id=\"__spellfade" + i + "__\"style=\"display:none\">" + html.charAt(i) + "</span>");
        newletter.appendTo(this);
        var letterdelay = i * duration_per_letter;
        $("#__spellfade" + i + "__").delay(letterdelay).fadeIn(settings.letterduration);
    }
    var element = $(this);
    setTimeout( function () {element.html(html);}, settings.duration);
  });

};


$.fn.spellFadeOut = function (duration, letterduration){

  var settings = $.extend({
      duration: 800,
      letterduration: 200,
  }, {duration: duration, letterduration: letterduration} );

  return this.each(function(){
    if ($(this).children("[id*='__spellfade']").length > 0){ return } // block, if spellfade is still in motion
    var html = $(this).html();
    var newhtml = ""
    for (var i=0; i<html.length;i++){
        newhtml += "<span id=\"__spellfade" + i + "__\">" + html.charAt(i) + "</span>";
    }
    $(this).html(newhtml);
    var duration_per_letter = settings.duration / html.length;
    for (var i=0; i<html.length; i++){
        var letterdelay = settings.duration - i * duration_per_letter;
        $("#__spellfade" + i + "__").delay(letterdelay).fadeOut(settings.letterduration);
    }
    var element = $(this);
    setTimeout( function () { element.css("display", "none"); element.html(html);}, settings.duration);
  });

};
