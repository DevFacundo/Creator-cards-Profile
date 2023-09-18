

const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const capturaFotoUsuario = document.getElementById('foto-usuario-captura'); // Elemento img para la foto de usuario
const ctx = canvas.getContext('2d');

const canvasWidth = 200; // Ancho deseado para el canvas
const canvasHeight = 200; // Alto deseado para el canvas



alert("PLEASE TAKE A PHOTO FOR FINISH YOUR REGISTER.");
const selectfoto = document.getElementById('select-foto');
selectfoto.addEventListener('click', () => {
  if (capturedPhotoBase64) {
      // Guardar la imagen en el almacenamiento local
      localStorage.setItem('capturedPhoto', capturedPhotoBase64);

      // Redirigir a profile.html
      window.location.href = 'profile.html';
  } else {
      alert("Por favor, primero capture una foto antes de seleccionarla.");
  }
});

let cameraOn=false;

async function setupCamera() {
    if (!cameraOn) {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      video.srcObject = stream;
      video.width = canvasWidth;
      video.height = canvasHeight;
      cameraOn = true; // Marcar la cámara como encendida
    }
  }
  
  async function capturePhoto() {
    if (cameraOn) {
      // Captura el fotograma actual del video en el canvas
      // canvas.width = video.videoWidth;
      // canvas.height = video.videoHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
      // Convierte el canvas en una imagen y establece la foto de usuario
      capturaFotoUsuario.src = canvas.toDataURL('photoUser/png');

      capturedPhotoBase64 = canvas.toDataURL('photoUser/png');
      
      
      // Apaga la cámara después de tomar la foto
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      cameraOn = false; // Marcar la cámara como apagada
    }
  }
const restartCameraButton = document.getElementById('restart-camera');

 restartCameraButton.addEventListener('click', () => {
   setupCamera(); // Encender la cámara nuevamente al hacer clic en el botón
   photoCaptured = false;
 });

// Iniciar la cámara cuando la página se carga
     window.onload = async () => {
        await setupCamera();
 };

// Evento para capturar una foto cuando se presiona el botón
let photoCaptured = false;

captureButton.addEventListener('click', () => {
  if (!photoCaptured) {
    capturePhoto();
    photoCaptured = true; // Marcar que la foto ha sido capturada
  }
});

localStorage.setItem('firstTimeLogin', 'false');