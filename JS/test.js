/* VALIDAR LAS RESPUESTAS DEL TEST */
function verificarRespuestas(){
    
    var total = 10;
    var puntos = 0;

    var Formulario = document.forms["Quiz"];
    var Respuestas = ["a","c","b","a","d","a","b","d","c","a"];

    for(var i = 1; i < total; i++){

        // Para validar que la pregunta sea contestada
        if(Formulario["p" + i].value === null || Formulario["p" + i].value === ""){
            alert("Contesta la pregunta" + i);
            return false;
        } else {
            if (Formulario["p" + i].value === Respuestas[i - 1]){
                puntos++;
            }
        }
    }

    var Resultado = document.getElementById("Resultado");
    Resultado.innerHTML = '<h3>Obtuviste <span>'+ puntos +'</span> de <span>'+ total +'</span> puntos</h3>';
    
    var Encabezado = document.getElementById("Encabezado");
    Encabezado.innerHTML = '<header id = "Header"> TEST <ul class="main-menu"> <li class="menu-item"><a href="Menu.html">Reiniciar Test</a></li><li class="menu-item"><a href="Tabla.html">Tabla de Resultados</a></li></ul></header> <br><br><br><br>';


    if(Formulario["p1"].value === Respuestas["a"]){
        document.getElementsByClassName("Preguntas").style.backgroundColor = '#A8E795';
    }else{
        if (Formulario["p1"].value === Respuestas["b"] || Formulario["p1"].value === Respuestas["c"] ||Formulario["p1"].value === Respuestas["d"]) {
            document.getElementsByClassName("Preguntas").style.backgroundColor = '#E36B6B';
        }
    }

    return false;
}