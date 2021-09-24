
var startTime = new Date(2021, 8, 20, 18);

var startTime = startTime.getTime();


var currentTime = new Date();
var timeDiff = (currentTime.getTime() - startTime)/1000;


var euroPerSecond = 500000 / 86400

var euro = Math.round(timeDiff * euroPerSecond)



var zloty = Math.round(euro * 4.6)

var sasin = Math.round(zloty/70000000 *100000)/100000


var nowak = Math.round(zloty/40000)

var dworczyk = Math.round(zloty/4320)


$( document ).ready(function() {

var currentAmount = setInterval(amount, 1000);

function amount(){



}

    $("#euro").html(euro);
    $("#zloty").html(zloty);
    $("#sasin").html(sasin);
    $("#nowak").html(nowak);
    $("#dworczyk").html(dworczyk);


var myVar = setInterval(myTimer, 1000);

function myTimer() {

  var startTime = new Date(2021, 8, 20, 18);
  var startTime = startTime.getTime();

  var currentTime = Date.now();
  var timeDiff = (currentTime - startTime)/1000;
  var euro = Math.round(timeDiff * euroPerSecond)

  var euroMil = Math.floor(euro/1000000)
  var euroTys = Math.floor((euro-euroMil*1000000)/1000)

  console.log(""+euroMil+" "+euroTys)

  var zloty = Math.round(euro * 4.6)

  var sasin = Math.round(zloty/70000000 *100000)/100000

// $("#euro").innerHTML(euro);
 document.getElementById("euro").innerHTML = euro;

  document.getElementById("zloty").innerHTML = zloty;

    document.getElementById("sasin").innerHTML = sasin;

    var nowak = Math.round(zloty/40000)

  document.getElementById("nowak").innerHTML = nowak;

var dworczyk = Math.round(zloty/4320)

  document.getElementById("dworczyk").innerHTML = dworczyk;
}
});
