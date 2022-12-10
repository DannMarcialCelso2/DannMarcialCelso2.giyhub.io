let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de Quinto Semestre de la Preparatoria NO.180 3° "1".')
  .pauseFor(200)
  .deleteChars(10)
  .start();
