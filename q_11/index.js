let celcius = document.querySelector('celcius')
let fahrenheit = document.querySelector('fahrenheit')
let temp = document.querySelector('temperature')

function fahrenheitConverter(input){
   let fahr = input * 9/5 + 32
    return fahr
}

fahrenheit.addEventListener('click', fahrenheitConverter)

celcius.addEventListener('click', )