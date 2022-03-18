let button = document.getElementById("button")
let select = document.getElementById('select-moedas')


async function ConverterMoedas() {

    let moedas = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL').then(function(resposta){
       return resposta.json()
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    
    console.log(dolar)
    console.log(euro)
    
    let inputvalor = Number(document.getElementById("input").value)
    let inputmoedas = document.getElementById("input-moedas")
    let textoreal = document.getElementById("iputreal")
    
    if (select.value === 'US$ - Dolár Americano') {

        let valorEmDolar = inputvalor / dolar
        inputmoedas.innerHTML = valorEmDolar.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }

    if (select.value === '€ - Euro') {
        let valorEmEuro = inputvalor / euro
        inputmoedas.innerHTML = valorEmEuro.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }

    textoreal.innerHTML = inputvalor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
}
function TrocarMoedas() {

    let textomoedas = document.getElementById('texto-moedas')
    let bandeiraMoedas = document.getElementById('bandeira-moedas')

    if (select.value === 'US$ - Dolár Americano') {
        textomoedas.innerHTML = 'Dolár Americano'
        bandeiraMoedas.src = './img/estados unidos.png'
    }

    if (select.value === '€ - Euro') {
        textomoedas.innerHTML = 'Euro'
        bandeiraMoedas.src = './img/euro (1).png'

    }
    
    ConverterMoedas()
  

}


button.addEventListener('click', ConverterMoedas)
select.addEventListener('change', TrocarMoedas)