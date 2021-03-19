document.addEventListener('DOMContentLoaded', function ()
{
    const ejecutar = document.getElementById("ejecutar");
    ejecutar.onclick = function ()
    {
        let textoEntrada = document.getElementById("entrada").value;
        let textoConclusion = document.getElementById("mostrador");
        let texto = []
        const letras = /[a-zA-Z]/
        const numeros = /[0-9]/
        const palabrasReservadas = ["for", "while", "do", "document", "appendChild", "addEventListener"]

        for (const caracter of textoEntrada)
        {
            if (letras.test(caracter))
            {
                const add = document.createElement('p')
                textoConclusion.appendChild(add)
                var newContent = document.createTextNode(`${caracter} es letra`);
                add.appendChild(newContent)

            }else
            {
                add.appendChild(`${caracter} no es letra`)
            }
            texto.push(caracter)
        }

    }
})

