
var startTime = new Date(Date.UTC(2021, 8, 20, 14));
var startTime = startTime.getTime();

var startTimeIzba = new Date(Date.UTC(2021, 9, 27, 14));
var startTimeIzba = startTimeIzba.getTime();


var currentTime = new Date();
var timeDiff = (currentTime.getTime() - startTime)/1000;
var timeDiffIzba = (currentTime.getTime() - startTimeIzba)/1000;


var euroPerSecond = 500000 / 86400
var euroPerSecondIzba = 1000000 / 86400



var euro_turow = Math.round(timeDiff * euroPerSecond)
var zloty_turow = Math.round(euro_turow * 4.6)
var korona = Math.round(euro_turow * 25.73)

var euro_izba = Math.round(timeDiffIzba * euroPerSecondIzba)
var zloty_izba = Math.round(euro_izba * 4.6)

var euro = euro_turow+euro_izba
var zloty = zloty_turow+zloty_izba

var sasin = Math.round(zloty/68896820*1000)/1000

var ziobro = Math.round(zloty/280000000 *10000)/10000


var nowak = Math.round(zloty/28000)

var dworczyk = Math.round(zloty/4320)

  var osmiorniczka  = Math.round(zloty/50)

var piecsetplus = Math.round(zloty/500)

var dodatekRodzic = Math.round(zloty/193)

var zasilekPielegnacyjny = Math.round(zloty/215.84)

var respiratory = Math.round(zloty/(370000000/2200))

var ratownik = Math.round(zloty/2844)

  var pielegniarka = Math.round(zloty/3141)

  var nauczyciel = Math.round(zloty/2582)

  var aniolki = Math.round(zloty/((49563+42760)/2))

  var tvp = Math.round(zloty/(2*10**9)*1000)/1000

  var caritas = Math.round(zloty/(9186158+2298117)*100)/100

  var emeryt = Math.round(zloty/2139.22)



$( document ).ready(function() {

var currentAmount = setInterval(amount, 1000);

function amount(){



}

    $("#euro_turow").html(Number(euro_turow).toLocaleString());
    $("#zloty_turow").html(Number(zloty_turow).toLocaleString());
    $("#korona").html(Number(korona).toLocaleString());

    $("#euro_izba").html(Number(euro_izba).toLocaleString());
    $("#zloty_izba").html(Number(zloty_izba).toLocaleString());

    $("#euro").html(Number(euro).toLocaleString());
    $("#zloty").html(Number(zloty).toLocaleString());
    $("#sasin").html(Number(sasin).toLocaleString());
    $("#ziobro").html(Number(ziobro).toLocaleString());


    $("#nowak").html(nowak);
    $("#dworczyk").html(Number(dworczyk).toLocaleString());
    $("#osmiorniczka").html(Number(osmiorniczka).toLocaleString());
    $("#piecsetplus").html(Number(piecsetplus).toLocaleString());
    $("#dodatekRodzic").html(Number(dodatekRodzic).toLocaleString());
    $("#zasilekPielegnacyjny").html(Number(zasilekPielegnacyjny).toLocaleString());
    $("#respiratory").html(Number(respiratory).toLocaleString());
    $("#aniolki").html(Number(aniolki).toLocaleString());
    $("#tvp").html(Number(tvp).toLocaleString());
    $("#caritas").html(Number(caritas).toLocaleString());

    $("#ratownik").html(Number(ratownik).toLocaleString());
    $("#pielegniarka").html(Number(pielegniarka).toLocaleString());
    $("#nauczyciel").html(Number(nauczyciel).toLocaleString());
    $("#emeryt").html(Number(emeryt).toLocaleString());


var myVar = setInterval(myTimer, 1000);

function myTimer() {

var startTime = new Date(Date.UTC(2021, 8, 20, 14));
var startTime = startTime.getTime();

var startTimeIzba = new Date(Date.UTC(2021, 9, 27, 14));
var startTimeIzba = startTimeIzba.getTime();


var currentTime = new Date();
var timeDiff = (currentTime.getTime() - startTime)/1000;
var timeDiffIzba = (currentTime.getTime() - startTimeIzba)/1000;


var euroPerSecond = 500000 / 86400
var euroPerSecondIzba = 1000000 / 86400



var euro_turow = Math.round(timeDiff * euroPerSecond)
var zloty_turow = Math.round(euro_turow * 4.6)
var korona = Math.round(euro_turow * 25.73)

var euro_izba = Math.round(timeDiffIzba * euroPerSecondIzba)
var zloty_izba = Math.round(euro_izba * 4.6)

var euro = euro_turow+euro_izba
var zloty = zloty_turow+zloty_izba

  var sasin = Math.round(zloty/68896820*10000)/10000;

// $("#euro").innerHTML(euro);
 document.getElementById("euro_turow").innerHTML = Number(euro_turow).toLocaleString();
 document.getElementById("zloty_turow").innerHTML = Number(zloty_turow).toLocaleString();
  document.getElementById("korona").innerHTML = Number(korona).toLocaleString();

 document.getElementById("euro_izba").innerHTML = Number(euro_izba).toLocaleString();
 document.getElementById("zloty_izba").innerHTML = Number(zloty_izba).toLocaleString();

 document.getElementById("euro").innerHTML = Number(euro).toLocaleString();
 document.getElementById("zloty").innerHTML = Number(zloty).toLocaleString();


    document.getElementById("sasin").innerHTML = Number(sasin).toLocaleString();

var ziobro = Math.round(zloty/280000000 *10000)/10000;

  document.getElementById("ziobro").innerHTML = Number(ziobro).toLocaleString();


    var nowak = Math.round(zloty/28000);

  document.getElementById("nowak").innerHTML = nowak;

  var dworczyk = Math.round(zloty/4320);

  document.getElementById("dworczyk").innerHTML = Number(dworczyk).toLocaleString();

  var osmiorniczka = Math.round(zloty/50);

document.getElementById("osmiorniczka").innerHTML = Number(osmiorniczka).toLocaleString();

  var piecsetplus = Math.round(zloty/500);

  document.getElementById("piecsetplus").innerHTML = Number(piecsetplus).toLocaleString();

  var dodatekRodzic = Math.round(zloty/193);

    document.getElementById("dodatekRodzic").innerHTML = Number(dodatekRodzic).toLocaleString();

  var zasilekPielegnacyjny = Math.round(zloty/215.84);

    document.getElementById("zasilekPielegnacyjny").innerHTML = Number(zasilekPielegnacyjny).toLocaleString();

var respiratory = Math.round(zloty/(370000000/2200))

  document.getElementById("respiratory").innerHTML = Number(respiratory).toLocaleString();

  var tvp = Math.round(zloty/(2*10**9)*1000)/1000

    document.getElementById("tvp").innerHTML = Number(tvp).toLocaleString();

  var caritas = Math.round(zloty/(9186158+2298117)*100)/100

  document.getElementById("caritas").innerHTML = Number(caritas).toLocaleString();


  var ratownik = Math.round(zloty/2844)

    document.getElementById("ratownik").innerHTML = Number(ratownik).toLocaleString();


var pielegniarka = Math.round(zloty/3141)

  document.getElementById("pielegniarka").innerHTML = Number(pielegniarka).toLocaleString();

  var nauczyciel = Math.round(zloty/2582)

    document.getElementById("nauczyciel").innerHTML = Number(nauczyciel).toLocaleString();

var aniolki = Math.round(zloty/((49563+42760)/2))

    document.getElementById("aniolki").innerHTML = Number(aniolki).toLocaleString();

  var emeryt = Math.round(zloty/2139.22)

    document.getElementById("emeryt").innerHTML = Number(emeryt).toLocaleString();
}
});
