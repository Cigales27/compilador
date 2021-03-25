document.addEventListener('DOMContentLoaded', function () {
    const ejecutar = document.getElementById("ejecutar");
    ejecutar.onclick = function () {
        let textoEntrada = document.getElementById("entrada").value;
        let textoConclusion = document.getElementById("mostrador");
        let texto = []
        const letras = /[a-zA-Z]/
        const numeros = /[0-9]/
        const saltoLinea = "\n"
        const palabrasReservadas = ["const", "let", "var", "for", "while", "do", "document", "appendChild", "addEventListener", "if"]
        const operadoresMatematicos = ["+", "-", "*", "/"]
        const operadoresLogicos = ["<", ">", "<=", ">=", "==", "!=", "&&", "||", "!"]
        const operadoresAsignacion = ["++", "--", "=", "*=", "/=", "+=", "-=", "%="]

        textoEntrada = textoEntrada.replace(/\n/g, " ")
        //if (textoEntrada.test(saltoLinea))
        var buscador = textoEntrada.split(" ");

        for (var i = 0; i < buscador.length; i++) {
            switch (buscador[i].test) {
                case (letras):
                    for (var t = 0; t < palabrasReservadas.length; t++) {
                        var final = (palabrasReservadas.length) - 1
                        if (buscador[i] == palabrasReservadas[t]) {
                            agregarEtiqueta(buscador[i], "palabra reservada")
                            t = final
                        } else {
                            var final = (palabrasReservadas.length) - 1
                            if (t == final) {
                                agregarEtiqueta(buscador[i], "palabra")
                                t = final
                            }
                        }
                    }
                    break

                case (numeros):
                    agregarEtiqueta(buscador[i], "numero")
                    break

                default:
                    agregarEtiqueta(buscador[i], "error")
            }

            // for (var t = 0; t < buscador.length; t++) {
            //
            // }

        }

        function agregarEtiqueta(numero, tipo) {
            const add = document.createElement('p')
            add.style.color = `#FFFFFF`
            textoConclusion.appendChild(add)
            var newContent = document.createTextNode(`${numero} es \t${tipo}`);
            add.appendChild(newContent)
        }

        // for (const caracter of textoEntrada) {
        //     if (letras.test(caracter)) {
        //         const add = document.createElement('p')
        //         add.style.color = `#FFFFFF`
        //         textoConclusion.appendChild(add)
        //         var newContent = document.createTextNode(`${caracter} es letra`);
        //         add.appendChild(newContent)
        //     } else {
        //         const add = document.createElement('p')
        //         add.style.color = `#FFFFFF`
        //         textoConclusion.appendChild(add)
        //         var newContent = document.createTextNode(`${caracter} no es letra`);
        //         add.appendChild(newContent)
        //     }
        //     texto.push(caracter)
        // }
    }
})