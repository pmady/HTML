
$(document).ready(function(){
var resultList = $("resultList");
resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function(){
resultList.toggle(500);
}); 

// var list= $("header nav li")
// list.css("font-weight","bold");
// list.filter(":first").css("font-size","20px");

$("header nav li:last").css("font-weight","bold","font-size","20px")
});