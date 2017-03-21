//Antes de iniciar las frases
$("#tweet").hide(); //se esconde el icono de twitter para mas comodidad
$("#botonFrase").css("margin-left","15%"); //arreglo de margen que deja al poner en "hide" el icono tweet
$("#botonFrase").text("Comenzar!"); //cambio de texto en el boton antes de iniciar

$(document).ready(function(){ //se ejecuta cuando se termina de cargar el html

  var randomQuotes;
  var randomNumber;
  var randomNumber;
  var randomColors;
  var contador;
  //getQuote();

  function getQuote() {
    var quotes = ["1","2","3","BEE BEE CTM","ALFIIN","ALAGRANDE LEPUSECUCA"]; //el quote 0 corresponde la autor 0 y asi sucesivamente
    var author = ["Autor1","Autor2","Autor3","MARITOO","YOLOCO","HOMERO"];
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6',
     '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];


    randomNumber = Math.floor(Math.random()*quotes.length); //numero random entre la longitud de quotes

    while (randomNumber === contador) { //esto previene que la operacion de arriba arroje el mismo numero que la vez anterior
      randomNumber = Math.floor(Math.random()*quotes.length);
    }
    contador = randomNumber; //para controlar la operacion de repeticion
    randomQuotes = quotes[randomNumber];
    randomAuthor = author[randomNumber];
    randomColors = colors[randomNumber];

    $(".quote").text('"' + randomQuotes + '"'); //se agrega el texto a la clase quote
    $(".author").text(randomAuthor); //se agrega el autor del mismo

    $("html body").animate({ //efecto de animacion al cambiar el backgroundColor, no usar el background-color, esta funcion solo sirve con el jquery-ui
      backgroundColor: colors[randomNumber],
      //color: colors[randomNumber]
    }, 1000);


}


  $("#tweet").on('click', function(){ //al hacer click en el icono de twitter
    window.open("https://twitter.com/intent/tweet?text="+randomQuotes + " " + randomAuthor); //se agregan los quotes y author random correspodientes y se twittea con las palabras del mismo
  });

  $("#botonFrase").on('click', function(){
    $("#botonFrase").css("margin-left","0px"); //se devuelve el margen que se saco para el icono tweeter
    $("#botonFrase").text("Más frases"); //cambio de texto en boton para mas comodidad
    $("#tweet").show(); //muestra icono tweeter
    getQuote(); //inicia funcion

  });
});
