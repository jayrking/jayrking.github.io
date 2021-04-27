function windowClose() {

  try {
    window.opener = window;
    var win = window.open("","_self");
    win.close();
    top.close();
} catch (e) {

}    
  }


   
    $(document).on("scroll", function () {
        var pageTop = $(document).scrollTop()
        var pageBottom = pageTop + $(window).height()
        var tags = $("div")
        
        for (var i = 0; i < tags.length; i++) {
        var tag = tags[i]
        
        if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible")
        } else {  $(tag).removeClass("visible")
        }
        }
        })


        function myFunction() {
            var x = document.getElementById("hide");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }

        
          /* var audio = $("#crack")[0];
          $("#sound").mouseenter(function() {
          audio.play();
          }); */

          var test = document.getElementById("sound");
test.addEventListener("mouseover", function( event ) {   
    var audio = document.getElementById("crack");
    audio.play();
    audio.pause();
}, false);