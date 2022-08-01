function contar() {
    contador = setInterval(function () {

        var n = document.querySelector(".contador").innerHTML;
        var soma = parseInt(n) + 1
        document.querySelector(".contador").innerHTML = soma

    }, 1000)

}

function stop() {
    clearInterval(contador)
}

function reset() {
    document.querySelector(".contador").innerHTML = 0
}