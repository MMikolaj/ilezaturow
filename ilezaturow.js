
var startTime = new Date(2021, 8, 20, 18);

var startTime = startTime.getTime();


var currentTime = new Date();
var timeDiff = (currentTime.getTime() - startTime)/1000;

console.log(timeDiff/84600)

var euroPerSecond = 500000 / 86400

var euro = Math.round(timeDiff * euroPerSecond)

console.log(euro+" euros")

var zloty = Math.round(euro * 4.6)

console.log(zloty+" PLN")

var sasin = Math.round(zloty/70000000 *100000)/100000

console.log(sasin+" $a$inów")


$( document ).ready(function() {

var currentAmount = setInterval(amount, 1000);

function amount(){



}

    $("#euro").html(euro);
    $("#zloty").html(zloty);
    $("#sasin").html(sasin);


    var myVar = setInterval(myTimer, 1000);

function myTimer() {

  var startTime = new Date(2021, 8, 20, 18);
  var startTime = startTime.getTime();

  var currentTime = Date.now();
  var timeDiff = (currentTime - startTime)/1000;
  var euro = Math.round(timeDiff * euroPerSecond)

  var zloty = Math.round(euro * 4.6)

  var sasin = Math.round(zloty/70000000 *100000)/100000

// $("#euro").innerHTML(euro);
 document.getElementById("euro").innerHTML = euro;

  document.getElementById("zloty").innerHTML = zloty;

    document.getElementById("sasin").innerHTML = sasin;

}
});
