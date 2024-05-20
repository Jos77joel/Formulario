// Función para iniciar sesión
function iniciarSesion1() {
    // Obtener valores del formulario
    const pcorreo = document.getElementById('vcorreo').value.toLowerCase();
    const pcontraseña = document.getElementById('vcontraseña').value.toLowerCase();

    // Verificar si el correo y la contraseña coinciden con los valores generados
    if (pcorreo === document.getElementById("res").value.toLowerCase && pcontraseña === contraseña) {
        // Redirigir al usuario a la página deseada
        window.location.assign("https://jos77joel.github.io/Edad-Mascotas/");
    } else {
        // Mostrar un mensaje de error en caso de credenciales incorrectas
        document.getElementById('res').innerText = "Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.";
    }

    // Devolver false para evitar que el formulario se envíe
    return false;
}