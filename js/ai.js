var AI = {
    show: function(){
        $("#invFadeBox").addClass("fadeBoxActivity");
        $("#spinner").addClass("spinner");
        $(".buttonActivity").replaceWith("<a href='javascript:AI.hide()' class='buttonActivity'>Close</a>");
        
    },
    
    hide: function(){
        $("#invFadeBox").removeClass("fadeBoxActivity");
        $("#spinner").removeClass("spinner");
        $(".buttonActivity").replaceWith("<a href='javascript:AI.show()' class='buttonActivity'>Open</a>");
    }
}
