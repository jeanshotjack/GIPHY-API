    // topics array for gifs
   $(document).ready(function() {
    var topics = ["judgment", "sarcasm", "laugh", "cry", "surprised", "no", "yes", "clapping", "anger", "excitement"];

    console.log(topics);

    // button for each string in array
    function makeButtons() {
        $("#gifClick").empty();
        for (i = 0; i < topics.length; i++) {
            // create button 
            var react = $("<button>");
            react.addClass("topic");
            // add class
            //add attribute
            react.attr("data-name", topics[i]);
            react.text(topics[i]);
            $("#gifClick").append(react);
        }
    }

    // make another button for whatever user writes in
    $("#add-react").on("click", function(event) {
        // so it can't submit on its own
        event.preventDefault();
        var react = $("#react-input").val().trim();
        // The movie from the textbox is then added to our array
        topics.push(react);
        makeButtons();
      });

      // display the whole thing
      makeButtons();
    });


// NOTES

// TO PAUSE GIFS 
/* <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">
  <img src="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-still="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200_s.gif" data-animate="https://media2.giphy.com/media/8rFQp4kHXJ0gU/200.gif" data-state="still" class="gif">
  <img src="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-still="https://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif" data-animate="https://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif" data-state="still" class="gif">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    $(".gif").on("click", function() { - WHEN YOU CLICK THE IMAGE
  
      var state = $(this).attr("data-state"); - STORE IMAGE STATE

      var animate = $(this).attr("data-animate"); - SET VARS FOR STILL STATE AND ANIMATED STATE
      var still = $(this).attr("data-still");

      if (state === "still") { - IT WILL ANIMATE IF STILL
        $(this).attr("src", animate);
        $(this).attr("data-state", "animate");
      }
      if (state === "animate") { - IT WILL PAUSE IF MOVING
        $(this).attr("src", still);
        $(this).attr("data-state", "still");
      } */

