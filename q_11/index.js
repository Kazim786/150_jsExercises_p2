let fahrenheit = document.querySelector('fahrenheit')
let temp = document.querySelector('temperature')

function fahrenheitConverter(input){
   let fahr = (input * 9/5) + 32
    return console.log(fahr);
}

function celciusConverter(input){
    let celc = (input - 32) / 1.8
    return console.log(celc);
}
let fahrResult = fahrenheitConverter(temp)
let celciusResult = celciusConverter(temp)

fahrenheit.addEventListener('click', fahrResult)

celcius.addEventListener('click', celciusResult)