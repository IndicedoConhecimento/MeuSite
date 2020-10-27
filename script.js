function clicou() {
    var pesobruto = document.querySelector("input#peso")
    var alturabruta = document.querySelector("input#altura")
    var txt = document.getElementById("txt")
    var peso = Number(pesobruto.value)
    var altura = Number(alturabruta.value)
    var valor = (peso / altura ** 2).toFixed(2)
    txt.innerHTML = `O resultado é ${valor}`
    if (valor <= 19) {
        txt.innerHTML += `<div>Abaixo do peso ideal</div>`
    } else if (valor >= 20 && valor <= 24) {
        txt.innerHTML += `<div>Você está no peso ideal</div>`
    } else if (valor >= 25 && valor <= 29) {
        txt.innerHTML += `<div>Você está no sobrepeso</div>`
    } else if (valor >= 30 && valor <= 34) {
        txt.innerHTML += `<div>Você está no grau de obesidade 1</div>`
    } else if (valor >= 35 && valor <= 39) {
        txt.innerHTML += `<div>Você está no grau de obesidade 2</div>`
    } else if (valor >= 40) {
        txt.innerHTML += `<div>Você está no grau de obesidade 3</div>`
    }
}