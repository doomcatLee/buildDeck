
var suits = ["clubs","hearts", "diamonds", "kings"];
var ranks = ["ace", "jack", "queen", "king", "2", "3", "4", "5", "6","7", "8", "9", "10"];


$(function(){
  var output = suits.forEach(function(suit){
    ranks.forEach(function(rank){
      $("#output").append("<li>" + rank + " of " + suit + "</li>");
    });
  });
});
