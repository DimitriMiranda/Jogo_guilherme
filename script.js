let clicks = 0;
let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
const box = document.body.querySelector("#quadrado")

function pular(){

    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }


    
   if(clicks > 2 &&  clicks < 4 ) {

    let velocidade_media  = getRandomInt(2,3)
    box.style.animation = "quadrado "+velocidade_media+"s infinite linear"

   }
 

   if(clicks > 4 ) {

    let velocidade_rapida  = getRandomInt(1,2)
    box.style.animation = "quadrado "+velocidade_rapida+"s infinite linear"

   }


    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)

    
}

var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 20 && EsquerdaQuadrado > 0 && topoPersonagem >= 75){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
    }
    

}, 10)



function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

