$(document).ready(function(){
    $("body").delegate(".leaf","click",function(){
        if($(this).hasClass("root"))
        return true;
        var elem = $(this);
        if($(elem).parent().children().length == 1)
        {
            $(elem).parent().html($(elem).parent().html()+"<ul><li><a class='leaf'>Nodo</a></li></ul>");
        }
        else
        {
            var ul = $(elem).parent().children("ul");
            $(ul).append("<li><a class='leaf'>Nodo</a></li>");
        }
    });
});