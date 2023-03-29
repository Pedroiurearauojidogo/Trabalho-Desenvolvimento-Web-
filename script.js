function calcularImc(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (isNaN (peso) / isNaN(altura)){
        alert("Os valores inseridos são inválidos. Insira novamente.");
        return;
    }

    var imc = peso/(altura*altura);
    document.getElementById("Imc").innerHTML = `Seu IMC é: ${imc.toFixed(1)} <br> Confira sua classificação na tabela abaixo`;

}



