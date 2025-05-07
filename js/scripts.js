const data = new Date();

const diaAtual = data.getDate();



if (diaAtual == 5){//VALMIR//
    valmir.innerText = `Valmir está de folga !`;
    color_valmir.style.backgroundColor = "yellow";
}else if (diaAtual == 6){//ELIAS//
    elias.innerText = `ELIAS está de folga !`;
    color_daniel.style.backgroundColor = "yellow";
}else if (diaAtual == 7){//CARLINHOS//
    carlinhos.innerText = "Carlinhos está de folga !";
    color_elias.style.backgroundColor = "yellow";
}else if (diaAtual == 1){//CARLINHOS//
    carlinhos.innerText = `Carlinhos está de folga !`;
    color_carlinhos.style.backgroundColor = "yellow";
}else if (diaAtual == 2){//CARLINHOS//
    carlinhos.innerText = `Carlinhos está de folga !`;
    color_carlinhos.style.backgroundColor = "yellow";
}else if (diaAtual == 3){//DANIEL//
    daniel.innerText = "DANIEL está de folga !";
    color_elias.style.backgroundColor = "yellow";
}else {//A COMBINAR//
    combinar.innerText = `A combinar...`;
    combinar.style.color = "red";
}
















