document.querySelector("#quantidade").addEventListener("change", calcular)
document.querySelector("#tipo").addEventListener("change", calcular)
document.querySelector("#prototipo_cor").addEventListener("change", calcular)
document.querySelector("#prototipo_pal").addEventListener("change", calcular)
document.querySelector("#prototipo_sp").addEventListener("change", calcular)
document.querySelector("#fanatismo").addEventListener("input",function() {
    const fanatismo = document.querySelector("#fanatismo").value
    document.querySelector("label[for=fanatismo]").innerText = "Grau: " + prazo
    calcular()
} )
function calcular(){
    const qtde = document.querySelector("#quantidade").value
    let valor = qtde * 1000;
    document.querySelector("#valor").innerText = "R$ " + valor.toFixed(2)

    const tipo = document.querySelector("tipo").value
    if(tipo == 2) valor += 2000

    const prototipo = document.querySelector("#prototipo").checked
    if(prototipo) preco *= 1.1

    
   


}
