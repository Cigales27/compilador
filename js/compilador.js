document.addEventListener('DOMContentLoaded', function ()
{
    const ejecutar = document.getElementById("ejecutar");
    ejecutar.addEventListener("click", function (event)
    {
        let textoEntrada = document.getElementById("entrada").value;
        let textoConclusion = document.getElementById("mostrador");
        let texto = []



        for (const caracter of textoEntrada)
        {
            if (caracter != ('a'-'z'))
            {
                console.log("ok")
            }
            texto.push(caracter)
        }

    },false)
})

