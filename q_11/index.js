let celcius = document.querySelector('celcius')
let fahrenheit = document.querySelector('fahrenheit')
let temp = document.querySelector('temperature')

function fahrenheitConverter(input){
   let fahr = (input * 9/5) + 32
    return fahr
}

function celciusConverter(input){
    let celc = (input - 32) / 1.8
    return celc
}

fahrenheit.addEventListener('click', fahrenheitConverter)

celcius.addEventListener('click', celciusConverter)