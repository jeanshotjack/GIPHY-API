$(document).ready(function () {
    // topics array for gifs
    
    var topics = ["judgment", "sarcasm", "laughing", "crying", "surprised", "no", "yes", "clapping"];

    // button for each string in array
    function reactButtons() {
        $("#gifClick").empty(); // empty div prevent duplicate
        for (var i = 0; i < topics.length; i++) {
            // create button 
            var gifClick = ("<button>");
            gifClick.addClass("topic");
            // add class
            //add attribute
            gifClick.attr("data-name", topics[i]);
            gifClick.text(topics[i]);
            $("#gifClick").append(gifClick);
        }
    }
});

