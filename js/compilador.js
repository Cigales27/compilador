document.addEventListener('DOMContentLoaded', function () {

    const ejecutar = document.getElementById("ejecutar")
    ejecutar.onclick = function () {
        var mos = document.getElementById("tabla")
        mos.classList.remove("ocultar")
        let textoEntrada = document.getElementById("entrada").value
        let textoConclusion = document.getElementById("mostrador")
        let tabla = document.getElementById("contenidoTabla")
        let texto = []
        const letras = /[a-zA-Z0-9]/
        const numeros = /[0-9]/
        const signos = /[\{\}\[\]\(\)]/
        const operadores = /[\=\<\>\*\+\-]/g
        const saltoLinea = /\n\t/g
        const forCiclo = /[for\;\;\+\+]/
        var llaves = []
        var corchetes = []
        const palabrasReservadas = ["const", "let", "var", "for", "while", "do", "document", "appendChild", "addEventListener", "if", "replace"]
        const operadoresMatematicos = ["+", "-", "*", "/"]
        const operadoresLogicos = ["<", ">", "<=", ">=", "==", "!=", "&&", "||", "!"]
        const operadoresAsignacion = ["++", "--", "=", "*=", "/=", "+=", "-=", "%="]

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
                    if (buscador[i] == "{" ||buscador[i] == "}") verificarLlave(buscador[i])
                    if (buscador[i] == "("||buscador[i] == ")") verificarParentesis(buscador[i])
                    break

                case letras.test(buscador[i]):
                    for (var t = 0; t < palabrasReservadas.length; t++) {
                        var final = (palabrasReservadas.length) - 1
                        if (buscador[i] == palabrasReservadas[t]) {
                            agregarFila(buscador[i], "palabra reservada ")
                            t = final
                        } else {
                            if (t == final) {
                                if (operadores.test(buscador[i+1]))
                                {
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

        function verificarLlave(llave) {
            if (llave == "{") {
                llaves.push(llave)
            }
            if (llave == "}") {
                if (llaves.length==0) {
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
                if (corchetes.length==0) {
                    agregarEtiqueta("()", "error", "red")
                }
                corchetes.pop(llave)
            }
        }

        function agregarFila(lexema, token)
        {
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

        function agregarEtiqueta(numero, tipo, color) {
            const add = document.createElement('p')
            add.style.color = `${color}`
            textoConclusion.appendChild(add)
            var newContent = document.createTextNode(`${numero} es \t${tipo}`);
            add.appendChild(newContent)
        }

        if (llaves.length != 0) {
            agregarEtiqueta("{", "error", "red")
        }

        if (corchetes.length != 0) {
            agregarEtiqueta("(", "error", "red")
        }
    }
})