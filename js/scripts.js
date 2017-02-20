$(function(){
  $("#input").submit(function(){
    event.preventDefault();
    var sentence = $("#input1").val();
    var outputArray = [];
    sentence.split(" ").forEach(function(each){
      if (each.length >= 3){
        outputArray.push(each);
      }
    });
    var outputString = outputArray.reverse().join(" ");
    $("h1").append(outputString);
  });
});
