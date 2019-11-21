var SERVER_URL = "http://localhost:8000/api";

$(document).ready(function(){
    $("#callnewservice").click(function(){
      var combineurl = SERVER_URL + "/eiei/" + document.getElementById('text1').value + "&" + document.getElementById('text2').value 
      $.ajax({url: combineurl, success: function(result){
        $("#newoutput").text(result);
      }});
    });
  });
