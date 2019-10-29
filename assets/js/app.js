// topics array for gifs
$(document).ready(function () {
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
  $("#add-react").on("click", function (event) {
    // so it can't submit on its own
    event.preventDefault();
    var react = $("#react-input").val().trim();
    // The movie from the textbox is then added to our array
    topics.push(react);
    makeButtons();
  });

  // display the whole thing
  makeButtons();


  // this like sorta works but it's the wrong gifs
  $(".topic").on("click", function () {
    $("#gifsHere").empty();
    var topic = $(this).attr("data-name");
    console.log("Topic: " + topic)
    // create queryURL
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      topic + "&api_key=EMs4wuevK1YxxkipNCqv9C6AgfZ2BMzg&limit=10";

    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function (response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {

          var gifDiv = $("<div>");

          var p = $("<p>").text("Rating: " + results[i].rating);

          var reactImage = $("<img>");
          reactImage.attr("src", results[i].images.fixed_height.url);
          // var state = $("data-state"); 
          // var animate = $(".animate"); //- SET VARS FOR STILL STATE AND ANIMATED STATE
          // var still = $(".still");
          reactImage.addClass("gif");
          reactImage.attr("data-still",results[i].images.fixed_height_still.url); // still image
          reactImage.attr("data-animate",results[i].images.fixed_height.url); // animated image
          reactImage.attr("data-state", "still"); // set the image state
          

          gifDiv.append(p);
          gifDiv.append(reactImage);

          $("#gifsHere").prepend(gifDiv);

          $(".gif").on("click", function() { //- WHEN YOU CLICK THE IMAGE

           //- STORE IMAGE STATE
           var state = $(this).attr("data-state"); 
           var animate = $(this).attr("data-animate");
           var still = $(this).attr("data-still");
          
            if (state === "still") { //- IT WILL ANIMATE IF STILL
              // $(this).attr("src", animate);
              // $(this).attr("data-state", "animate");
              $(this).attr("src", $(this).data("animate"));
        $(this).attr("data-state", "animate");
            }
            else { //IT WILL PAUSE IF MOVING
              $(this).attr("src", $(this).data("still"));
              $(this).attr("data-state", "still");
              // $(this).attr("src", still);
              // $(this).attr("data-state", "still");
            }
          });

        }
      });
  });

//  // this part breaks the app for some reason and now it doesn't do anything
// $(".gif").on("click", function() { //- WHEN YOU CLICK THE IMAGE

//   var state = $(this).attr("data-state"); //- STORE IMAGE STATE

//   var animate = $(this).attr("data-animate"); //- SET VARS FOR STILL STATE AND ANIMATED STATE
//   var still = $(this).attr("data-still");

//   if (state === "still") { //- IT WILL ANIMATE IF STILL
//     $(this).attr("src", animate);
//     $(this).attr("data-state", "animate");
//   }
//   if (state === "animate") { //IT WILL PAUSE IF MOVING
//     $(this).attr("src", still);
//     $(this).attr("data-state", "still");
//   }
// });

});






// NOTES

// MY API KEY EMs4wuevK1YxxkipNCqv9C6AgfZ2BMzg

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

