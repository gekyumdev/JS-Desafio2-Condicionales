const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const resultado = document.getElementById('resultado');
const errorMessage = document.getElementById('error-message');

function sumarInputs() {
    const valor1 = parseFloat(input1.value) || 0;
    const valor2 = parseFloat(input2.value) || 0;
    const valor3 = parseFloat(input3.value) || 0;

    const suma = valor1 + valor2 + valor3;
    resultado.textContent = suma;

    if (suma > 10) {
        errorMessage.style.display = 'block'; 
    } else {
        errorMessage.style.display = 'none';
    }
}

input1.addEventListener('input', sumarInputs);
input2.addEventListener('input', sumarInputs);
input3.addEventListener('input', sumarInputs);