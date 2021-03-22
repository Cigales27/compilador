document.addEventListener('DOMContentLoaded', function () {
    const ejecutar = document.getElementById("ejecutar");
    ejecutar.onclick = function () {
        let textoEntrada = document.getElementById("entrada").value;
        let textoConclusion = document.getElementById("mostrador");
        let texto = []
        const letras = /[a-zA-Z]/
        const numeros = /[0-9]/
        const palabrasReservadas = ["const", "let", "var","for","while", "do", "document", "appendChild", "addEventListener", "if"]
        const operadoresMatematicos = ["+", "-", "*", "/"]
        const operadoresLogicos = ["<", ">", "<=", ">=", "==", "!=", "&&", "||", "!"]
        const operadoresAsignacion = ["++", "--", "=", "*=", "/=", "+=", "-=", "%="]


        var buscador = textoEntrada.split(" ");
        for (var i = 0; i < palabrasReservadas.length; i++)
        {
            for (var t = 0; t < buscador.length; t++)
            {
                if (buscador[t] == palabrasReservadas[i]) {
                    console.log(buscador[t]);
                    const add = document.createElement('p')
                    add.style.color = `#FFFFFF`
                    textoConclusion.appendChild(add)
                    var newContent = document.createTextNode(`${buscador[t]} es palabra reservada`);
                    add.appendChild(newContent)
                }
            }

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