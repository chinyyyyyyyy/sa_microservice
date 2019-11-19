var SERVER_URL = "http://localhost:8000/api";

$(document).ready(function(){
    $("#callnewservice").click(function(){
      $.ajax({url: SERVER_URL + "/eiei", success: function(result){
        $("#nsclient").html(result);
      }});
    });
  });

  // $(document).ready(function(){
  //   var comineurl = SERVER_URL + "/eiei/" + ("#text1").get()+ "&"+ ("#text2").get()
  //     $("#callnewservice").click(function(){
  //       $.ajax({url: comineurl, success: function(result){
  //         $("#nsclient").html(result);
  //       }});
  //     });
  //   });