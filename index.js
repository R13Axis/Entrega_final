// API

// var myHeaders = new Headers();
// myHeaders.append("apikey", "aCf46N7t7HeUTKEpFq3rfRwoknUxYYqM");

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=mxn%2Ceur&base=usd", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

let fijar = document.getElementById("fijar");
let moneda = document.getElementById("moneda");
let cotizacion = document.getElementById("cotizacion").style.display = "none";

fijar.addEventListener('click' , () => {

    if (document.getElementById("monto_indicado").value <= 1000) {
        document.getElementById("04").style.display = "none";
        document.getElementById("05").style.display = "none";
        document.getElementById("06").style.display = "none";
        document.getElementById("07").style.display = "none";
        document.getElementById("08").style.display = "none";
        document.getElementById("09").style.display = "none";
    }

    if (document.getElementById("monto_indicado").value >= 1000 && document.getElementById("monto_indicado").value <= 10000) {

        document.getElementById("05").style.display = "none";
        document.getElementById("06").style.display = "none";
        document.getElementById("07").style.display = "none";
        document.getElementById("08").style.display = "none";
        document.getElementById("09").style.display = "none";

    }

    if (document.getElementById("monto_indicado").value >= 10001 && document.getElementById("monto_indicado").value <= 100000) {

        document.getElementById("01").style.display = "none";
        document.getElementById("02").style.display = "none";
        document.getElementById("03").style.display = "none";
        document.getElementById("04").style.display = "none";
        document.getElementById("05").style.display = "none";
        document.getElementById("06").style.display = "none";
        document.getElementById("07").style.display = "none";
    
    }
})

let plazo = document.getElementById("plazo");
let tiempo = document.getElementById("tiempo");
let cuota = document.getElementById("cuota");

plazo.addEventListener('change', () => {

tiempo.innerText = "Duración de los pagos: " + parseInt(plazo.options[plazo.selectedIndex].value) + " meses";

let variable = document.getElementById("monto_indicado").value / parseInt(plazo.options[plazo.selectedIndex].value);

cuota.innerText = parseInt(plazo.options[plazo.selectedIndex].value) + " Cuotas de: " + variable;

cotizacion = document.getElementById("cotizacion").style.display = "block";

})











