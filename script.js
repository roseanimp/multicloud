document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores de peso e altura
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);

    // Converte a altura de cm para metros
    const altura = alturaCm / 100;

    // Calcula o IMC
    const imc = altura / (peso * peso);

    // Determina a categoria do IMC
    let categoria;
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
});
