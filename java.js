// Función que se ejecuta al presionar el botón "Generar Correo"
function generarCorreo1() {
    // Obtener valores del formulario
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const apellidos = document.getElementById('apellido').value.toLowerCase();
    const fechaNacimiento = new Date(document.getElementById('fecha').value);
    const contraseña = document.getElementById('contraseña').value.toLowerCase();


    // Separar el nombre y el apellido
    const [primerNombre, segundoNombre] = nombre.split(' ');
    const [primerApellido, segundoApellido] = apellidos.split(' ');

    // Tomar las primeras letras del primer nombre y primer apellido
    const inicialNombre = primerNombre.substring(0, 1);
    const inicialApellido = primerApellido.substring(2, 5);
    const secinicialNombre = segundoNombre.substring(0, 1);
    const secinicialApellido = segundoApellido.substring(1, 3);

    //juntamos los nombres y apellidos//

    const unionTOTAL = inicialNombre+secinicialNombre+secinicialApellido+inicialApellido;

    // Formatear la fecha de nacimiento (sin guiones y tomando solo año, mes y día)

    const año = fechaNacimiento.getFullYear().toString().slice(-2); // Últimos dos dígitos del año
    const mes = ('0' + (fechaNacimiento.getMonth() + 1)).slice(-2); // Mes con dos dígitos
    const dia = ('0' + (fechaNacimiento.getDate() +1)).slice(-2); // Día con dos dígitos



     
    // Generar el correo
    const correo = `${unionTOTAL}${año}${dia}${mes}@gmail.com`;

    // Mostrar el correo en la salida
    document.getElementById('res').innerText = "Su Gmail es: " + correo;
}


