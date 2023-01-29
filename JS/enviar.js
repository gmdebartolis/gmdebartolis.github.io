//este script arroja un mensaje de alerta de acuerdo a que la persona sea mayor de edad ó no
//me costó poder plasmar la idea que quería hasta que pude aprender bien la sintaxis y funcionó
function botonenviar(){
    var edad
    edad = document.getElementById("edad").value;
    if(edad>17) {
        alert("Tu información ha sido enviada");
    } else {
        alert("Solicita a un adulto que se comunique");
    }

}