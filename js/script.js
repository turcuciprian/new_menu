jQuery(document).ready(function ($) {
    var settings = {
        sensitivity: 2, // number = sensitivity threshold (must be 1 or higher)
        interval: 100, // number = milliseconds for onMouseOver polling interval
        over: megaHoverOver, // function = onMouseOver callback (REQUIRED)
        timeout: 500, // number = milliseconds delay before onMouseOut
        out: megaHoverOut // function = onMouseOut callback (REQUIRED)
    };
    
    $('#nav li').hoverIntent(settings);
    function megaHoverOver(){
                $(this).children('ul').addClass('tempDisplay');
    }
    function megaHoverOut(){
        $(this).children('ul').removeClass('tempDisplay');
    }
});