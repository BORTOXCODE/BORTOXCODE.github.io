var numer1 = 1
var numer2 = 2
var numer3 = 3
var timer1 = 0

function lewoslajd1()
{
    numer1++; if (numer1>3) numer1=1;
    var pliczek = "<a href=\"zdjecia/" + numer1 + ".webp\"><img src=\"zdjecia/" + numer1 + ".webp\" class=\"zdjecie1\" id=\"zdjecie1\" ></a>";
    document.getElementById("galeria1").innerHTML = pliczek;

    numer2++; if (numer2>3) numer2=1;
    var pliczek = "<a href=\"zdjecia/" + numer2 + ".webp\"><img src=\"zdjecia/" + numer2 + ".webp\" class=\"zdjecie2\" id=\"zdjecie2\" ></a>";
    document.getElementById("galeria2").innerHTML = pliczek;

    numer3++; if (numer3>3) numer3=1;
    var pliczek = "<a href=\"zdjecia/" + numer3 + ".webp\"><img src=\"zdjecia/" + numer3 + ".webp\" class=\"zdjecie3\" id=\"zdjecie3\" ></a>";
    document.getElementById("galeria3").innerHTML = pliczek;
}

function prawoslajd1()
{
    numer1--; if (numer1<1) numer1=3;
    var pliczek = "<a href=\"zdjecia/" + numer1 + ".webp\"><img src=\"zdjecia/" + numer1 + ".webp\" class=\"zdjecie1\" id=\"zdjecie1\" ></a>";
    document.getElementById("galeria1").innerHTML = pliczek;

    numer2--; if (numer2<1) numer2=3;
    var pliczek = "<a href=\"zdjecia/" + numer2 + ".webp\"><img src=\"zdjecia/" + numer2 + ".webp\" class=\"zdjecie2\" id=\"zdjecie2\" ></a>";
    document.getElementById("galeria2").innerHTML = pliczek;

    numer3--; if (numer3<1) numer3=3;
    var pliczek = "<a href=\"zdjecia/" + numer3 + ".webp\"><img src=\"zdjecia/" + numer3 + ".webp\" class=\"zdjecie3\" id=\"zdjecie3\" ></a>";
    document.getElementById("galeria3").innerHTML = pliczek;
}

function autoprawoslajd()
{
    numer1--; if (numer1<1) numer1=3;
    var pliczek = "<a href=\"zdjecia/" + numer1 + ".webp\"><img src=\"zdjecia/" + numer1 + ".webp\" class=\"zdjecie1\" id=\"zdjecie1\" ></a>";
    document.getElementById("galeria1").innerHTML = pliczek;

    numer2--; if (numer2<1) numer2=3;
    var pliczek = "<a href=\"zdjecia/" + numer2 + ".webp\"><img src=\"zdjecia/" + numer2 + ".webp\" class=\"zdjecie2\" id=\"zdjecie2\" ></a>";
    document.getElementById("galeria2").innerHTML = pliczek;

    numer3--; if (numer3<1) numer3=3;
    var pliczek = "<a href=\"zdjecia/" + numer3 + ".webp\"><img src=\"zdjecia/" + numer3 + ".webp\" class=\"zdjecie3\" id=\"zdjecie3\" ></a>";
    document.getElementById("galeria3").innerHTML = pliczek;
    
    setTimeout("autoprawoslajd()", 10000);
}

$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          window.location.hash = hash;
        });
      }
    });
  });