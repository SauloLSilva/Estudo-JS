// Rodando arquivos diretamente como JS
// Usar prompt no console: npm install prompt-sync
function velocidade_minima(){
    const prompt = require("prompt-sync")({ sigint: true });
    var vel = Number(prompt('Digite velocidade: '))
    var pista = Number(prompt('Digite pista usada\n[1]Local\n[2]Expressa:\n '))

    if (vel >= 61 & pista == 1 || vel >= 91 & pista == 2){
        console.log(`Velocidade de ${vel}Km/h = Multado`)
    }

    else{
        if( (isNaN(vel)) || (isNaN(pista)) ){
            console.log('Verifique dados inseridos')
        }
        else{
            console.log('Velocidade permitida')
        }
    }            
}
velocidade_minima()