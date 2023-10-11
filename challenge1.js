// Declarar variables para el estado
let category = "";
const categories = [];

function handleCategoryInput(event) {
    category = event.target.value;
}

function handleAddCategory() {
    if (category.trim() !== "") {
        categories.push(category);
        category = ""; // Borrar el campo de entrada
        updateCategoryList();
    }
}

function updateCategoryList() {
    const categoryList = document.getElementById("categoryList");
    categoryList.innerHTML = categories.map(category => `<li>${category}</li>`).join("");
}

function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " es un número par.";
    } else {
        return numero + " es un número impar.";
    }
}

function handleReset() {
    const contadorInput = document.getElementById("contador");
    contadorInput.value = "0";
}

function handleSubtract() {
    const contadorInput = document.getElementById("contador");
    const valorActual = parseInt(contadorInput.value, 10);
    if (!isNaN(valorActual)) {
        contadorInput.value = (valorActual - 1).toString();
    }
}

function handleSuma() {
    const contadorInput = document.getElementById("contador");
    const valorActual = parseInt(contadorInput.value, 10);
    if (!isNaN(valorActual)) {
        contadorInput.value = (valorActual + 1).toString();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const numeroInput = document.getElementById("numeroInput");
    const verificarButton = document.getElementById("verificarButton");
    const resultado = document.getElementById("resultado");
    const resetButton = document.getElementById("resetButton");
    const subtractButton = document.getElementById("subtractButton");
    const sumaButton = document.getElementById("sumaButton");
    const addCategoryButton = document.getElementById("addCategoryButton");

    resetButton.addEventListener("click", handleReset);
    subtractButton.addEventListener("click", handleSubtract);
    sumaButton.addEventListener("click", handleSuma);
    verificarButton.addEventListener("click", function() {
        const numeroIngresado = parseFloat(numeroInput.value);
        if (!isNaN(numeroIngresado)) {
            resultado.textContent = verificarParImpar(numeroIngresado);
        } else {
            resultado.textContent = "Por favor, ingrese un número válido.";
        }
    });

    addCategoryButton.addEventListener("click", handleAddCategory);
});
  
