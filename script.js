// Adiciona um ouvinte de evento ao formulário para interceptar a submissão
document.getElementById('imc-form').addEventListener('submit', function(evento) 
                                                     
    {
    // Previne o envio padrão do formulário, que recarrega a página
    evento.preventDefault();

    // Obtém os valores de peso e altura dos campos de entrada
    const campoPeso = document.getElementById('weight');
    const campoAltura = document.getElementById('height');
    const peso = parseFloat(campoPeso.value);
    const alturaCm = parseFloat(campoAltura.value);

    // Seleciona o elemento onde o resultado será exibido
    const elementoResultado = document.getElementById('result');

    // Valida as entradas: os valores devem ser positivos e numéricos
    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
        elementoResultado.textContent = 'Por favor, insira valores válidos para peso e altura.';
        elementoResultado.style.color = 'red'; // Exibe a mensagem de erro em vermelho
        return; // Encerra a execução da função se as entradas não são válidas
    }

    // Converte a altura de centímetros para metros
    const altura = alturaCm / 100;

    // Calcula o IMC usando a fórmula: peso / (altura * altura)
    const imc = peso / (altura * altura);

    // Determina a categoria do IMC com base no valor calculado
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

    // Exibe o resultado do IMC e a categoria na div de resultado
    elementoResultado.textContent = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
    elementoResultado.style.color = '#333'; // Reseta a cor do texto para o padrão
});
