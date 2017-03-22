//Antes de iniciar las frases
$("#tweet").hide(); //se esconde el icono de twitter para mas comodidad
$("#botonFrase").css("margin-left","15%"); //arreglo de margen que deja al poner en "hide" el icono tweet
$("#botonFrase").text("Ver"); //cambio de texto en el boton antes de iniciar

$(document).ready(function(){ //se ejecuta cuando se termina de cargar el html

  var randomQuotes;
  var randomNumber;
  var randomNumber;
  var randomColors;
  var contador;
  //getQuote();

  function getQuote() {
    var quotes = ["No importa lo bueno que seas en algo, siempre eres mejor junto a alguien más.", //0
    "Deja tu ego en la puerta, prepárate para compartir el crédito y deja que la creatividad empiece a fluir.", //1
    "Por mucho que el tiempo apriete, detectaras el problema y buscarás una manera de arreglarlo.", //2
    "Cuando empiezas a pensar que lo sabes todo, que ya lo has visto todo, tienes un problema.", //3
    "Deberiamos escuchar a nuestra intuición, pero no seguirla de inmediato.", //4
    "No dejar de ponernos a prueba y enriquecer nuestra base de datos personal.", //5
    "Admitir errores, tomarse una pausa para pensar, unir puntos, dejarse la piel en pequeños detalles, asi se resuelven problemas.",                                                          //6
    "Somos arquitectos de nuestro propio destino.",                       //7
    "Lo importante es no dejar de hacerse preguntas.",                      //8
    "La alegría de ver y entender es el más perfecto don de la naturaleza.",  //9
    "El misterio es la cosa más bonita que podemos experimentar. Es la fuente de todo arte y ciencia verdadera.", //10
    "Una persona que nunca ha cometido un error nunca intenta nada nuevo.", //11,
    "Nunca consideres el estudio como una obligación, sino como la oportunidad para penetrar en el bello y maravilloso mundo del saber",                                                              //12
    "El uso de COBOL paraliza la mente, su enseñanza, por tanto, debe ser considerada como un delito penal.", //13
    "Hablar es barato. Enséñame el código.",                                //14
    "No se puede tener un gran software sin un gran equipo, y la mayoría de los equipos de desarrollo se comportan como familias disfuncionales.",                                            //15
    "Primero aprenda informática y toda la teoría. Acto seguido desarrolle un estilo de programación. Luego olvidesé todo eso y solo hackee."                                                     //16
  ]; //el quote 0 corresponde la autor 0 y asi sucesivamente

    var author = ["Carl Honoré","Carl Honoré","Carl Honoré","Carl Honoré","Carl Honoré","Carl Honoré","Carl Honoré",
                  "Albert Einstein","Albert Einstein","Albert Einstein","Albert Einstein","Albert Einstein","Albert Einstein","E.W. Dijkstra","Linus Torvalds","Jim McCarthy","George Carrette"];
    var colors = ['#16a085', '#27ae60', '#82B1FF', '#f39c12', '#e74c3c', '#9b59b6',
     '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#90CAF9","#00ACC1","#78909C","#00B0FF"];


    randomNumber = Math.floor(Math.random()*quotes.length); //numero random entre la longitud de quotes

    while (randomNumber === contador) { //esto previene que la operacion de arriba arroje el mismo numero que la vez anterior
      randomNumber = Math.floor(Math.random()*quotes.length);
    }
    contador = randomNumber; //para controlar la operacion de repeticion
    randomQuotes = quotes[randomNumber];
    randomAuthor = author[randomNumber];
    randomColors = colors[randomNumber];

    $(".quote").text('"'+randomQuotes + '"'); //se agrega el texto a la clase quote
    $(".author").text(randomAuthor); //se agrega el autor del mismo

    $("html body").animate({ //efecto de animacion al cambiar el backgroundColor, no usar el background-color, esta funcion solo sirve con el jquery-ui
      backgroundColor: colors[randomNumber],
      //color: colors[randomNumber]
    }, 1000);

}


  $("#tweet").on('click', function(){ //al hacer click en el icono de twitter
    window.open("https://twitter.com/intent/tweet?text="+randomQuotes + " Autor: " + randomAuthor); //se agregan los quotes y author random correspodientes y se twittea con las palabras del mismo
  });


  $("#botonFrase").on('click', function(){
    $("#botonFrase").css("margin-left","0px"); //se devuelve el margen que se saco para el icono tweeter
    $("#botonFrase").text("Más frases"); //cambio de texto en boton para mas comodidad
    $("#tweet").show(); //muestra icono tweeter
    getQuote(); //inicia funcion
  });


});
