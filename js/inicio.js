// En la página de inicio de sesión
document.querySelector('#form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario

    const emailIngresado = document.getElementById('correo').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;

    // Recupera los datos de registro almacenados
    const userDataJSON = localStorage.getItem('userData');
    if (userDataJSON) {
        const userDataArray = JSON.parse(userDataJSON);

        // Busca el objeto de datos correspondiente al correo electrónico ingresado
        const userData = userDataArray.find(user => user.email === emailIngresado);

        if (userData && userData.contrasena === contrasenaIngresada) {
            // Las credenciales son correctas, verifica si es la primera vez que inicia sesión
            const firstTimeLogin = localStorage.getItem('firstTimeLogin');
            if (firstTimeLogin === 'true') {
                // Es la primera vez que inicia sesión, redirige al usuario a la página de foto
                window.location.href = 'photo.html';
            } else {
                // No es la primera vez, redirige al usuario a la página de perfil
                window.location.href = 'profile.html';
            }
        } else {
            // Las credenciales son incorrectas, muestra un mensaje de error
            alert('Credenciales incorrectas. Por favor, verifica tu correo electrónico y contraseña.');
        }
    } else {
        // No se encontraron datos de registro, muestra un mensaje de error
        alert('No se encontraron datos de registro. Por favor, regístrate primero.');
    }
});