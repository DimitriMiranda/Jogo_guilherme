let clicks = 0;
let personagem = document.querySelector('#personagem')
let quadrado = document.querySelector('#quadrado')
const box = document.body.querySelector("#quadrado")



function pular(){

    clicks++;
    if(personagem.classList != 'animar'){
        personagem.classList.add('animar')
    }



    beep()



    setTimeout(function(){
        personagem.classList.remove('animar')
    }, 500)

    
       if(clicks > 3  &&  clicks < 6 ) {
    
        let velocidade_rapida  = getRandomInt(1,2)
        box.style.animation = "quadrado "+velocidade_rapida+"s infinite linear"
    
       }


       if(clicks > 6 ) {
    
        let velocidade_rapida  = 1
        box.style.animation = "quadrado "+velocidade_rapida+"s infinite linear"
    
       }



    
}

var testarColisao = setInterval( function(){

    var topoPersonagem = parseInt(
     window.getComputedStyle(personagem).getPropertyValue('top')
    )
    var EsquerdaQuadrado = parseInt(
        window.getComputedStyle(quadrado).getPropertyValue('left')
       )

       if(EsquerdaQuadrado < 150 && EsquerdaQuadrado > 0 && topoPersonagem >= 110){
        quadrado.style.animation = 'none'
        quadrado.style.display = 'none'
        alert('Você perdeu!')
        document.location.reload(true)
    }
    

}, 10)



function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }

