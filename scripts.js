const data = new Date();

const diaAtual = data.getDate();


if(diaAtual == 30){
    daniel.innerText = `Daniel está de folga !`
    color_daniel.style.backgroundColor = "yellow" 
}if(diaAtual == 3){
    valmir.innerText = `Valmir está de folga !`
    color_valmir.style.backgroundColor = "yellow"
}if(diaAtual == 29 && 2){
    elias.innerText = "Elias está de folga !"
    color_elias.style.backgroundColor = "yellow"
}if(diaAtual == 28 && 1){
    carlinhos.innerText = `Carlinhos está de folga !`
    color_carlinhos.style.backgroundColor = "yellow"
}else{
    combinar.innerText = `A combinar...`
    combinar.style.color = "red"
}




















