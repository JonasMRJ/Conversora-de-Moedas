function calcular_imc() {
    let peso = document.getElementById("peso");
    let altura = document.getElementById("altura");

    let real_peso = parseFloat(peso.value.replace(",", "."))
    let real_altura = parseFloat(altura.value.replace(",", "."))

    let imc = (real_peso / real_altura**2).toFixed("1")

    let resultado = document.getElementById("resultado")
    
    if (imc >= 40) {
        resultado.textContent = `Seu IMC é de ${imc} e voce esta classficado como obeso de classe 3 (morbido)`
    } else if (imc >= 35 && imc < 40) {
        resultado.textContent = `Seu IMC é de ${imc} e voce esta classificado como obeso de classe 2`
    } else if (imc >= 30 && imc < 35) {
        resultado.textContent = `Seu IMC é de ${imc} e voce esta classificado como obeso de classe 1`
    } else if (imc >= 25 && imc < 30) {
        resultado.textContent = `Seu IMC é de ${imc} e voce esta classificado como acima do peso`
    } else if (imc >= 18.5 && imc < 25) {
        resultado.textContent = `Seu IMC é de ${imc} e voce esta classificado como peso ideal`
    } else if (imc < 18.5) {
        resultado.textContent = `Seu IMC é de ${imc} e voce esta classificado como abaixo do peso`
    }

}

function calcular_dolar() {
    let reais = document.getElementById("reais");
    let real_reais = parseFloat(reais.value.replace(",", "."));

    let dolar = (real_reais / 5).toFixed("2");

    let resultado = document.getElementById("resultado")

    resultado.textContent = `Sua fortuna em dolares totaliza em $${dolar}`;
}

function calcular_euro() {
    let real = document.getElementById("reais");
    let real_real = parseFloat(real.value.replace(",", "."));

    let euro = (real_real / 5.6).toFixed("2");

    let resultado_euro = document.getElementById("resultado");

    resultado_euro.textContent = `Sua fortuna em euros totaliza em €${euro}`;
}