function windowClose() {
  let new_window =
                open(location, '_self');
  
            new_window.close();
  
           
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

        