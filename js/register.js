document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registro-form');

    registroForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita el envío del formulario

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email= document.getElementById('email').value;
        const date= document.getElementById('date').value;
        const direccion= document.getElementById('direccion').value;
        const movil= document.getElementById('movil').value;
        const contrasena=document.getElementById('contrasena').value;

       
        // Crear un objeto con los datos del usuario
        const userData = {
            nombre,apellido,email,date,direccion,movil,contrasena};

        // Guardar el objeto userData en un array o hacer lo que necesites con él
        const userDataArray = [userData];
        console.log(userDataArray);
        // Almacenar el array en el almacenamiento local
        localStorage.setItem('userData', JSON.stringify(userDataArray));
        localStorage.setItem('firstTimeLogin', 'true');
        console.log("Formulario de inicio de sesión enviado");
        // Redirigir a la página de perfil
        window.location.href = 'index.html';
    });
});