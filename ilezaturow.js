
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

var piecsetplus = Math.round(zloty/500)

var respiratory = Math.round(zloty/(370000000/2200))


$( document ).ready(function() {

var currentAmount = setInterval(amount, 1000);

function amount(){



}

    $("#euro").html(Number(euro).toLocaleString());
    $("#zloty").html(Number(zloty).toLocaleString());
    $("#sasin").html(sasin);
    $("#nowak").html(nowak);
    $("#dworczyk").html(Number(dworczyk).toLocaleString());
    $("#piecsetplus").html(Number(piecsetplus).toLocaleString());
    $("#respiratory").html(Number(respiratory).toLocaleString());


var myVar = setInterval(myTimer, 1000);

function myTimer() {

  var startTime = new Date(Date.UTC(2021, 8, 20, 14));
  // console.log(startTime);
  var startTime = startTime.getTime();

  var currentTime = Date.now();
  var timeDiff = (currentTime - startTime)/1000;
  var euro = Math.round(timeDiff * euroPerSecond)

  var zloty = Math.round(euro * 4.6)

  var sasin = Math.round(zloty/70000000 *100000)/100000

// $("#euro").innerHTML(euro);
 document.getElementById("euro").innerHTML = Number(euro).toLocaleString();

  document.getElementById("zloty").innerHTML = Number(zloty).toLocaleString();

    document.getElementById("sasin").innerHTML = sasin;

    var nowak = Math.round(zloty/40000)

  document.getElementById("nowak").innerHTML = nowak;

  var dworczyk = Math.round(zloty/4320)

  document.getElementById("dworczyk").innerHTML = Number(dworczyk).toLocaleString();

  var piecsetplus = Math.round(zloty/500)

  document.getElementById("piecsetplus").innerHTML = Number(piecsetplus).toLocaleString();

var respiratory = Math.round(zloty/(370000000/2200))

  document.getElementById("respiratory").innerHTML = Number(respiratory).toLocaleString();

}
});
