 function updateClock(date)
  {
    date = date || new Date();
    var h = date.getHours() % 12;
    var m = date.getMinutes();
    var s = date.getSeconds();
    var hdeg = (h - 3)*30;
    var mdeg = (m - 15)*6;
    var sdeg = (s - 15)*6;
    document.getElementById("hour").style.transform = "rotate(" + hdeg + "deg)";
    document.getElementById("min").style.transform = "rotate(" + mdeg + "deg)";
    document.getElementById("secs").style.transform = "rotate(" + sdeg + "deg)";
    var h = date.getHours();
    if(h >=6 && h <= 18){
      $("#clockWrapper").addClass("day").removeClass("night")
    }
    else{
      $("#clockWrapper").addClass("night").removeClass("day")
    }
  }

  function startUp()
  {
 //   generateMyTimeZoneList();
    setInterval("updateClock(null)", 1000);
  }

  function cancelTimeZone()
  {
    document.getElementById("addNew").style.marginTop = "1000px";
    setTimeout(addNewTZ_Aux1, 1000);
  }

  function addNewTZ()
  {
    document.getElementById("addNew").style.display = "block";
    setTimeout(addNewTZ_Aux, 0);
  }

  function addNewTZ_Aux(){
    document.getElementById("addNew").style.marginTop = "0px";
  }

  function addNewTZ_Aux1(){
    document.getElementById("addNew").style.display = "none";
  }

  function generateMyTimeZoneList(){
    var outS = "";

    outS += "<a href='javascript:TZSelected(-1)'> Current Location </a><br>";

    // generate markup

    outS += "<a href='javascript:addNewTZ()'>+ New </a>";


    document.getElementById("placeList").innerHTML = outS;
  
  }

  function TZSelected(a)
  {
    if(a == -1){
      updateClock(null);
    }
  }
var myTimeZones = [];  
