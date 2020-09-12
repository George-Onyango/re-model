$(document).ready(function(){
    $(".image1").click(function(){
      $(".image1").hide(1200);
      $(".p1").toggle(1200);
      $(".p1").show(1200);
    })
    $(".p1").click(function(){
      $(".p1").hide(1200);
      $(".image1").toggle(1200);
      $(".image1").show(1200);
    });
  });
  $(document).ready(function(){
      $(".image2").click(function(){
        $(".image2").hide(1200);
        $(".p2").toggle(1200);
        $(".p2").show(1200);
      })
      $(".p2").click(function(){
        $(".p2").hide(1200);
        $(".image2").toggle(1200);
        $(".image2").show(1200);
      });
  });
  $(document).ready(function(){
      $(".image3").click(function(){
        $(".image3").hide(1200);
        $(".p3").toggle(1200);
        $(".p3").show(1200);
      })
      $(".p3").click(function(){
        $(".p3").hide(1200);
        $(".image3").toggle(1200);
        $(".image3").show(1200);
      });
  });
    $(document).ready(function(){
        $('.text').hover(function () {
        $(this).animate({opacity:'1'});
        },
        function () {
        $(this).animate({opacity:'0'});
    })
    });
    $(document).ready(function(){
        $("form#submission").on('submit',function(event){
            event.preventDefault();
            let name = $("input:first").val();
            let email = $("input#mail").val();
            let message = $("textarea#message").val();
    
            if ($("input:first").val() && $("input#mail").val()){
                alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly.Your feedback is highly appreciated and valued");
            }
            else {
                alert("Please provide your correct name and email!");
            }
            event.preventDefault();
          })
      });