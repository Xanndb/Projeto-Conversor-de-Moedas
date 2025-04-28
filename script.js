
// Captura o select da moeda (dólar ou euro)
const currencySelect = document.querySelector(".currency-select");

// Captura a imagem da seta (botão de conversão) - Não será mais necessário o evento de clique aqui
// const buttonConvert = document.querySelector(".arrow-img");

// Captura o valor do input
const inputValores = document.querySelector(".inputValores");

// Captura os elementos onde os valores convertidos serão exibidos
const realConvertido = document.querySelector(".valor-real");
const dolarConvertido = document.querySelector(".valor-dolar");

// Elementos para trocar o nome e a imagem da moeda
const trocarNome = document.getElementById("nameDolar");
const trocarImg = document.querySelector(".imgDolar");

// Cotações fixas (poderiam ser dinâmicas no futuro)
const dolarToday = 5.6;
const euroToday = 6.45;
const libraToday = 7.55;


// Função para trocar o nome e a imagem da moeda E CONVERTER
function trocarMoeda() {
    if (currencySelect.value === "dolar") {
        trocarNome.innerHTML = "Dólar";
        trocarImg.src = "./assets/usa.png";
        converterValores(); // Chama a função de conversão ao mudar para dólar
    }
    
    if (currencySelect.value === "euro") {
        trocarNome.innerHTML = "Euro";
        trocarImg.src = "./assets/euro.png";
        converterValores(); // Chama a função de conversão ao mudar para euro
    }

    if (currencySelect.value === "britanica") {
        trocarNome.innerHTML = "Gbp";
        trocarImg.src = "./assets/britanica.png";
        converterValores(); // Chama a função de conversão ao mudar para gpb
    }



}

// Função principal para converter os valores
function converterValores() { // Renomeei a função para deixar mais claro o propósito
    const valorDigitado = inputValores.value; // Pega o valor atual do input

    if (currencySelect.value === "dolar") {
        dolarConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorDigitado / dolarToday);
    }
    
    if (currencySelect.value === "euro") {
        dolarConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorDigitado / euroToday);
    }

    if (currencySelect.value === "britanica") {
        dolarConvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorDigitado / libraToday);
    }



    realConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(valorDigitado);


}

// Adiciona o listener de evento de change no select de moeda
currencySelect.addEventListener("change", trocarMoeda);

// Adiciona um listener de evento para o input, para converter quando o valor digitado mudar
inputValores.addEventListener("input", converterValores);

// Chama a função trocarMoeda inicialmente para definir a imagem e, consequentemente, converter com o valor inicial (se houver)
trocarMoeda();


