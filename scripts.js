const data = new Date();

const diaAtual = data.getDate();


if (diaAtual == 30){//DANIEL//
    daniel.innerText = `Daniel está de folga !`;
    color_daniel.style.backgroundColor = "yellow";
}else if (diaAtual == 29){//VALMIR//
    valmir.innerText = `Valmir está de folga !`;
    color_valmir.style.backgroundColor = "yellow";
}else if (diaAtual == 28 && 3){//ELIAS//
    elias.innerText = "Elias está de folga !";
    color_elias.style.backgroundColor = "yellow";
}else if (diaAtual == 1 || 2){//CARLINHOS//
    carlinhos.innerText = `Carlinhos está de folga !`;
    color_carlinhos.style.backgroundColor = "yellow";
} else {//A COMBINAR//
    combinar.innerText = `A combinar...`;
    combinar.style.color = "red";
}
    





















