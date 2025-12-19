
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertedValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //MOEDA DE ORIGEM
    const currencyValue = document.querySelector(".currency-value") //MOEDA DE DESTINO

    const dolarToday = 5.2
    const euroToday = 5.9
    const bitcoinToday = 117000
    const libraToday = 6.8


    if (currencySelect.value == "USD") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "EUR") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "GBP") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "BTC") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}


function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".image-currency-converted")

    if (currencySelect.value == "USD") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/dolar-usa.png"
    }

    if (currencySelect.value == "EUR") {
        currencyName.innerHTML = "Euro"
         currencyImage.src = "./img/Euro.png"
    }

    if (currencySelect.value == "GBP") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./img/libra.png"
    }

    if (currencySelect.value == "BTC") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./img/bitcoin.png"
    }

    convertedValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertedValues)