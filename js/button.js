var toggleButton = function()
{
  var selection = $("#hideShowButton").html();
  if(selection == "Hide"){
    hideBoxes();
    $("#hideShowButton").html("Show");
  }
  else{
    showBoxes();
    $("#hideShowButton").html("Hide");
  }
}