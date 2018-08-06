$(document).ready(function(){
    for(var x = 0; x < data.length; x++){
        var ttl = data[x].title;
        $("#content").append("<div id='" + ttl + "'" + "</div>");
        $("#" + ttl).append("<h1>" + ttl + "</h1>");
        $("#" + ttl).append("<h2>SCSS</h2><div class='scss'></div>");
        for(var y = 0; y < data[x].scss.length; y++){
            $("#" + ttl + " .scss").append("<p>" + (y+1) + "|&nbsp;&nbsp;&nbsp;" + data[x].scss[y] + "</p>");
        }
        $("#" + ttl).append("<h2>CSS</h2><div class='css'></div>");
        for(var y = 0; y < data[x].css.length; y++){
            $("#" + ttl + " .css").append("<p>" + (y+1) + "|&nbsp;&nbsp;&nbsp;" + data[x].css[y] + "</p>");
        }
    }
});