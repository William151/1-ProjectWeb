console.log('Hello World')

//pegar hora atual
var agora = new Date()
var horaAtual = agora.getHours()

//pegar elementos que irei trabalhar: img, h2 e cor body

var corpoPagina = window.document.getElementById('corpo') // body
var textoInfo = window.document.getElementById('informaDia') // h2
var imagemPagina = window.document.getElementById('imagemDia')

var mudarEstado = function(imagem, mensagem, cor){
    corpoPagina.style.background = cor
    textoInfo.innerText = `Agora são ${horaAtual} horas da ${mensagem}.`
    imagemPagina.src = `img/${imagem}.jpg`

}
if (horaAtual >= 5 && horaAtual < 12){
    //então é manhã
    mudarEstado('manha', 'manhã', '#f2d59b')
     
} else if (horaAtual >= 12 && horaAtual <= 18){
    //tarde
    mudarEstado('tarde', 'tarde', '#6c2900' )

}else{
    //noite
    mudarEstado('noite', 'noite', '#062a64' )
}