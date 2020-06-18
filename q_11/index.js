let fahrenheit = document.querySelector('fahrenheit')
let temp = document.querySelector('temperature')
let celcius = document.querySelector('celcius')

function fahrenheitConverter(input){
   let fahr = (input * 9/5) + 32
    return alert(fahr);
}

function celciusConverter(input){
    let celc = (input - 32) / 1.8
    return alert(celc);
}
let fahrResult = fahrenheitConverter(temp)
let celciusResult = celciusConverter(temp)

fahrenheit.addEventListener('click', fahrResult)

celcius.addEventListener('click', celciusResult)