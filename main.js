const renombre = /^\w{1,50}$/;
const recorreo = /\w+(@dominio.com)/;
const recelular = /^[3][0-9]{9}$/;
const enviar = document.getElementById("enviar")
let registro =document.getElementById("registro")
// let nombre = document.getElementById("nombre")
// let apellido = document.getElementById("apellido")
// let correo = document.getElementById("correo")
// let celular = document.getElementById("celular")
const myModal = new bootstrap.Modal('#Modal')
enviar.addEventListener("click", validar)
function validar() {
   
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let correo = document.getElementById("email")
    let celular = document.getElementById("celular")
    if (renombre.test(nombre.value)&&renombre.test(apellido.value)&&recorreo.test(correo.value)&&recelular.test(celular.value)){
        
        registro.innerHTML +=`<div class="card text-center my-2">
        <div class="card-title fs-4">Elemento</div>
        <div class="card-body d-flex flex-column">
            <strong> Nombre : ${nombre.value}</strong>
            <strong> Apellido: ${apellido.value}</strong>
            <strong> Correo: ${correo.value}</strong>
            <strong> Celular: ${celular.value}</strong>
        </div>
    </div> `
        
        
        myModal.hide();
        nombre.value="";
        apellido.value=""
        correo.value=""
        celular.value=""
    }else{
        alert("ingrese los datos correctamente")
    }

}
// console.log(nombre.value)
// console.log(apellido.value)
// console.log(correo.value)
// console.log(celular.value)