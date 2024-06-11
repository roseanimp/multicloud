document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtém os valores de peso e altura
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    // Converte a altura de cm para metros
    const height = heightCm / 100;

    // Calcula o IMC
    const bmi = weight / (height * height);

    // Determina a categoria do IMC
    let category;
    if (bmi < 18.5) {
        category = 'Abaixo do peso';
    } else if (bmi < 24.9) {
        category = 'Peso normal';
    } else if (bmi < 29.9) {
        category = 'Sobrepeso';
    } else {
        category = 'Obesidade';
    }

    // Exibe o resultado
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Seu IMC é ${bmi.toFixed(2)} (${category})`;
});
