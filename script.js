var numer1 = 1
var numer2 = 2
var numer3 = 3

function lewoslajd1()
{
    numer1++; if (numer1>3) numer1=1;
    var pliczek = "<img src=\"zdjecia/" + numer1 + ".png\" class=\"zdjecie1\" >";
    document.getElementById("galeria1").innerHTML = pliczek;

    numer2++; if (numer2>3) numer2=1;
    var pliczek = "<img src=\"zdjecia/" + numer2 + ".png\" class=\"zdjecie2\" >";
    document.getElementById("galeria2").innerHTML = pliczek;

    numer3++; if (numer3>3) numer3=1;
    var pliczek = "<img src=\"zdjecia/" + numer3 + ".png\" class=\"zdjecie3\" >";
    document.getElementById("galeria3").innerHTML = pliczek;
}

function prawoslajd1()
{
    numer1--; if (numer1<1) numer1=3;
    var pliczek = "<img src=\"zdjecia/" + numer1 + ".png\" class=\"zdjecie1\" >";
    document.getElementById("galeria1").innerHTML = pliczek;

    numer2--; if (numer2<1) numer2=3;
    var pliczek = "<img src=\"zdjecia/" + numer2 + ".png\" class=\"zdjecie2\" >";
    document.getElementById("galeria2").innerHTML = pliczek;

    numer3--; if (numer3<1) numer3=3;
    var pliczek = "<img src=\"zdjecia/" + numer3 + ".png\" class=\"zdjecie3\" >";
    document.getElementById("galeria3").innerHTML = pliczek;
}