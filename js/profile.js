document.addEventListener('DOMContentLoaded', function () {
    const capturedPhotoBase64 = localStorage.getItem('capturedPhoto');
    const fotoUsuario = document.getElementById('foto-usuario'); // Elemento img para la foto de usuario

    if (capturedPhotoBase64) {
        fotoUsuario.src = capturedPhotoBase64;
    } else {
       
        alert("No se ha proporcionado una foto.");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    // Obtener los datos del usuario desde el almacenamiento local
    const userDataJSON = localStorage.getItem('userData');
    if (userDataJSON) {
        const userDataArray = JSON.parse(userDataJSON);

        // Mostrar los datos del primer usuario
        const userData = userDataArray[0];

      


        // Mostrar los datos en la tarjeta de perfil
        document.getElementById('nombre1').textContent =userData.nombre +" "+ userData.apellido;
      
        document.getElementById('date1').textContent="Date: "+ userData.date;
        document.getElementById('direccion1').textContent="Adress: "+ userData.direccion;
        document.getElementById('movil1').textContent="Phone: "+userData.movil;
        

    }
});
