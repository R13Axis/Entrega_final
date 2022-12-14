class acceso {

    constructor (usuario,clave) {
        this.usuario = usuario;
        this.clave = clave;
    }

}

const usuario1 = new acceso("Tocaimaza","ricardofor");
const usuario2 = new acceso("coder" , "12345");
const usuario3 = new acceso("random","pepelepu24")


let usuariosPermitidos = [usuario1, usuario2, usuario3];

Swal.fire({
    title: "Login",
    html: `<input type="text" id="usuario" class="swal2-input" placeholder="usuario">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: "Enviar",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
}).then((result)=> {

    if (result.isConfirmed) {


        if (document.getElementById("usuario").value === usuariosPermitidos[0].usuario && document.getElementById("password").value === usuariosPermitidos[0].clave) {

            let y = usuariosPermitidos.indexOf(usuario1);

            Swal.fire({
                title: "Bienvenido " + usuariosPermitidos[y].usuario,
                icon: "success",
                confirmButtonText: "Aceptar"
            })

        }
        else if (document.getElementById("usuario").value === usuariosPermitidos[1].usuario && document.getElementById("password").value === usuariosPermitidos[1].clave) {

            let y = usuariosPermitidos.indexOf(usuario2);

            console.log(y);

            Swal.fire({
                title: "Bienvenido " + usuariosPermitidos[y].usuario,
                icon: "success",
                confirmButtonText: "Aceptar"
            })

        }
        else  if (document.getElementById("usuario").value === usuariosPermitidos[2].usuario && document.getElementById("password").value === usuariosPermitidos[2].usuario) {

            let y = usuariosPermitidos.indexOf(usuario3);

            Swal.fire({
                title: "Bienvenido " + usuariosPermitidos[y].usuario,
                icon: "success",
                confirmButtonText: "Aceptar"
            })

        }

        else { 
            document.getElementById("body").style.display = "none";

        }


    }


})


// API

const api = "https://api.exchangerate.host/latest";
const contenedor = document.getElementById("contenedor");

setInterval( () => {
    fetch(api)
.then(response => response.json())
.then((data) => {
console.log(data);

let mxn = data.rates.MXN; 
let cad = data.rates.CAD; 
let usd = data.rates.USD; 
let eur = data.base.EUR; 
    contenedor.innerHTML=`
    
    <h2>Divisas</h2>
    
    <p>MXN: ${mxn}</p>
    <p>USD: ${usd}</p>
    <p>CAD: ${cad}</p>
    `
})
.catch(error => console.log(error));
}, 3000)



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











