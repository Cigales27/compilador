//las funciones de JavaScript empiezan a cargar cuanto el html termine
document.addEventListener('DOMContentLoaded', function () {
    //Se obtiene por id el boton
    const ejecutar = document.getElementById("ejecutar")
    //Inicia el evento del click
    ejecutar.onclick = function () {

        //Se obtiene la tabla para poder mostrarla cuando se le da click
        var mos = document.getElementById("tabla")
        mos.classList.remove("ocultar")

        //Se obtienne los valores
        let textoEntrada = document.getElementById("entrada").value
        let textoConclusion = document.getElementById("mostrador")
        let tabla = document.getElementById("contenidoTabla")

        //Declaracion de las expresiones regulares que swe podrian utilizar
        const letras = /[a-zA-Z0-9]/
        const numeros = /[0-9]/
        const signos = /[\{\}\[\]\(\)]/
        const operadores = /[\=\<\>\*\+\-]/g
        const forCiclo = /[for\;\;\+\+]/

        //Verificacion de llaves y corchetes
        var llaves = []
        var corchetes = []
        const palabrasReservadas = ["const", "let", "var", "for", "while", "do", "document", "appendChild", "addEventListener", "if", "replace"]
        const operadoresMatematicos = ["+", "-", "*", "/"]
        const operadoresLogicos = ["<", ">", "<=", ">=", "==", "!=", "&&", "||", "!"]
        const operadoresAsignacion = ["++", "--", "=", "*=", "/=", "+=", "-=", "%="]

        //Eliminacion de saltos de linea y tabulaciones
        textoEntrada = textoEntrada.replace(/\n/g, " ")
        textoEntrada = textoEntrada.replace(/\t/g, " ")

        var buscador = textoEntrada.split(" ")

        for (var i = 0; i < buscador.length; i++) {
            switch (true) {
                case numeros.test(buscador[i]):
                    agregarFila(buscador[i], "numero")
                    break

                case signos.test(buscador[i]):
                    agregarFila(buscador[i], "signo")
                    if (buscador[i] == "{" || buscador[i] == "}") verificarLlave(buscador[i])
                    if (buscador[i] == "(" || buscador[i] == ")") verificarParentesis(buscador[i])
                    break

                case letras.test(buscador[i]):
                    for (var t = 0; t < palabrasReservadas.length; t++) {
                        var final = (palabrasReservadas.length) - 1
                        if (buscador[i] == palabrasReservadas[t]) {
                            agregarFila(buscador[i], "palabra reservada ")
                            t = final
                        } else {
                            if (t == final) {
                                if (operadores.test(buscador[i + 1])) {
                                    agregarEtiqueta(buscador[i], "sin asignacion", "yellow")
                                }
                                agregarFila(buscador[i], "variable ")
                            }
                        }
                    }
                    break

                case operadores.test(buscador[i]):
                    agregarFila(buscador[i], "operador ")
                    break

                default:
                    agregarFila(buscador[i], "signo de puntuacion")
            }
        }


        //Verificacion de llaves y corchetes
        function verificarLlave(llave) {
            if (llave == "{") {
                llaves.push(llave)
            }
            if (llave == "}") {
                if (llaves.length == 0) {
                    agregarEtiqueta("{}", "error", "red")
                }
                llaves.pop("}")
            }
        }

        function verificarParentesis(llave) {
            if (llave == "(") {
                corchetes.push(llave)
            }
            if (llave == ")") {
                if (corchetes.length == 0) {
                    agregarEtiqueta("()", "error", "red")
                }
                corchetes.pop(llave)
            }
        }

        //Agrega los datos de la tabla
        function agregarFila(lexema, token) {
            const add = document.createElement("tr")
            tabla.appendChild(add)
            const contLexema = document.createElement("td")
            add.appendChild(contLexema)
            const contToken = document.createElement("td")
            add.appendChild(contToken)
            var newContent = document.createTextNode(lexema)
            var newcontent = document.createTextNode(token)
            contLexema.appendChild(newContent)
            contToken.appendChild(newcontent)


        }
        //Funcion para agregar los warnings y errores
        function agregarEtiqueta(numero, tipo, color) {
            const add = document.createElement('p')
            add.style.color = `${color}`
            textoConclusion.appendChild(add)
            var newContent = document.createTextNode(`${numero} es \t${tipo}`);
            add.appendChild(newContent)
        }

        //Verificacion de llaves y corchetes
        if (llaves.length != 0) {
            agregarEtiqueta("{", "error", "red")
        }

        if (corchetes.length != 0) {
            agregarEtiqueta("(", "error", "red")
        }
    }
})