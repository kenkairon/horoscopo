const express = require('express');
const app = express();


app.get('/zodiaco/:ddmm', function (req, res) {
  // extraer el día y mes de la fecha
  const fecha = req.params.ddmm;
  const dia = parseInt(fecha.substring(1, 3));
  const mes = parseInt(fecha.substring(3, 5)); 

  // determinar el signo del zodiaco
  let signo = '';
  let descripcion = '';
  let  imagenUrl = '';
  if ((mes == 1 && dia >= 20) || (mes == 2 && dia <= 18)) {
    signo = 'Acuario';
    imagenUrl = 'https://i.pinimg.com/564x/95/f5/e0/95f5e00afd9cb94598dfbc32f4c40551.jpg'
    descripcion = 'Los acuario son personas amables, inteligentes y llenas de curiosidad por el mundo. Son capaces de ver el mundo desde diferentes perspectivas y a menudo tienen una visión única y original.';
  } else if ((mes == 2 && dia >= 19) || (mes == 3 && dia <= 20)) {
    signo = 'Piscis';
    descripcion = 'Los piscis son personas sensibles y emocionales, con una gran capacidad de empatía. Son imaginativos y soñadores, y a menudo se sienten atraídos por el arte, la música y la poesía.';
    imagenUrl = 'https://i.pinimg.com/564x/6a/b1/b3/6ab1b35bf89012b136bdd6eb71769428.jpg'
  } else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 19)) {
    signo = 'Aries';
    descripcion = 'Los aries son personas valientes, enérgicas y llenas de pasión. Son líderes naturales y les gusta tomar la iniciativa en todo lo que hacen. También pueden ser impulsivos y a veces un poco imprudentes.';
    imagenUrl = 'https://i.pinimg.com/564x/93/e4/e1/93e4e14ac0aad087af2bcf9ce5a8f5b6.jpg'
  } else if ((mes == 4 && dia >= 20) || (mes == 5 && dia <= 20)) {
    signo = 'Tauro';
    descripcion = 'Los tauro son personas prácticas y realistas, con un fuerte sentido de la determinación y la perseverancia. Son leales y confiables, y a menudo tienen un gran talento para las artes y la creatividad.';
    imagenUrl = 'https://i.pinimg.com/564x/af/e5/04/afe5043a8e7cd20063b8703ec7d6ce8b.jpg'
  } else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = 'Géminis';
    descripcion = 'Los géminis son personas curiosas y sociables, con una mente abierta y adaptable. Son capaces de adaptarse a diferentes situaciones y personas con facilidad, y a menudo tienen un gran talento para la comunicación y el arte de la persuasión.';
    imagenUrl = 'https://i.pinimg.com/564x/77/f3/d7/77f3d71666eb8813d5bd9b4d18debd3e.jpg'
  } else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = 'Cáncer';
    descripcion = 'Los cáncer son personas emocionales y sensibles, con una gran capacidad de empatía y comprensión hacia los demás. Son leales y protectores con las personas que aman, y a menudo tienen un gran talento para la cocina y la gastronomía.';
    imagenUrl = 'https://i.pinimg.com/564x/90/98/0d/90980da0a5ae9c6e3b248bd03a6e340e.jpg'
  } else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 22)) {
    signo = 'Leo';
    descripcion = 'Los leo son personas valientes y apasionadas, con una gran autoconfianza y un fuerte sentido de la determinación. Les gusta ser el centro de atención y a menudo tienen una personalidad carismática y magnética.';
    imagenUrl = 'https://i.pinimg.com/564x/2f/28/b6/2f28b66f347a9d70c069383df92490dc.jpg'
  } else if ((mes == 8 && dia >= 23) || (mes == 9 && dia <= 22)) {
    signo = 'Virgo';
    descripcion = 'Los virgo son personas meticulosas y perfeccionistas, con una gran atención al detalle y una mente analítica y crítica. Son trabajadores incansables y a menudo tienen un gran talento para la ciencia y la tecnología.';
    imagenUrl = 'https://i.pinimg.com/564x/9a/34/ac/9a34ac6c53be395fec8408b3ae8347c2.jpg'
  } else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 22)) {
    signo = 'Libra';
    descripcion = 'Los libra son personas equilibradas y justas, con una gran habilidad para encontrar la armonía y el equilibrio en las relaciones interpersonales. Son amantes de la belleza y a menudo tienen un gran talento para las artes visuales y la moda.';
    imagenUrl = 'https://i.pinimg.com/564x/25/d3/8b/25d38bac2ff5959bbcd06af8910fb0de.jpg'
  } else if ((mes == 10 && dia >= 23) || (mes == 11 && dia <= 21)) {
    signo = 'Escorpión';
    descripcion = 'Los escorpio son personas intensas y apasionadas, con una gran profundidad emocional y una mente analítica y perspicaz. Son personas leales y comprometidas, y a menudo tienen un gran talento para la investigación y la resolución de problemas.';
    imagenUrl = 'https://i.pinimg.com/564x/e3/34/b5/e334b560a0bff78f10a1bdbd4d3143aa.jpg'
  } else if ((mes == 11 && dia >= 22) || (mes == 12 && dia <= 21)) {
    signo = 'Sagitario';
    imagenUrl = 'https://i.pinimg.com/564x/d8/13/ad/d813ad0189dea7ab1b4d19ec7ad0495b.jpg'
    descripcion = 'Los sagitario son personas aventureras y optimistas, con una gran pasión por la exploración y la expansión de sus horizontes. Son personas honestas y directas, y a menudo tienen un gran talento para la filosofía y la teología.';
  } else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 19)) {
    signo = 'Capricornio';
    descripcion = 'Los capricornio son personas ambiciosas y determinadas, con una gran capacidad para el trabajo duro y la perseverancia. Son prácticos y realistas, y a menudo tienen un gran talento para la gestión y la organización.';
    imagenUrl = 'https://i.pinimg.com/564x/6e/bb/c0/6ebbc079c789dcde1a7a5daca68c4850.jpg'
  }


  // generar la página HTML con el resultado
  res.send(`
   

<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Zodiaco</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">    
    </head>
<body class="row container">
    <hr>
    <div class="card mb-6 alert alert-secondary container" style="max-width: 500px;" class="col-xl-12">
        <div class="row g-0">
            <h3>Tu signo del zodíaco es ${signo} </h3>
            <div class="col-xl-5 bordes">
                <img src="${imagenUrl}" class="img-fluid rounded-start" alt="${signo}">
            </div>
            <div class="col-xl-7">
                <div class="card-body">
                    <p class="card-text alert alert-warning">${descripcion}</p>
                </div>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>
  `);
});

// const chi = express();
// // ruta para el servicio de astrología china
// chi.get('/astrologiachina/:yyyyddmm', function (req, res) {
//   // extraer el año de la fecha
//   const fecha = req.params.yyyyddmm;
//   const year = parseInt(fecha.substring(0, 4));

//   // calcular el animal del horóscopo chino correspondiente al año
//   const animales = ['Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra', 'Mono', 'Gallo', 'Perro', 'Cerdo'];
//   const animal = animales[(year - 4) % 12];


//   // descripción astronómica del animal
//   let descripcion = '';
//   switch (animal) {
//     case 'Rata':
//       descripcion = 'Las personas nacidas en el año de la rata son astutas y perspicaces, con una gran capacidad para adaptarse a diferentes situaciones. Son trabajadoras y ambiciosas, y a menudo tienen un gran talento para los negocios.';
//       break;
//     case 'Buey':
//       descripcion = 'Las personas nacidas en el año del buey son confiables y trabajadoras, con una gran capacidad para el esfuerzo sostenido y la perseverancia. Son pacientes y resistentes, y a menudo tienen un gran talento para la agricultura y la ganadería.';
//       break;
//     case 'Tigre':
//       descripcion = 'Las personas nacidas en el año del tigre son valientes y enérgicas, con una gran pasión por la vida y una personalidad carismática. Son impredecibles y a menudo tienen un gran talento para las artes marciales y el deporte.';
//       break;
//     case 'Conejo':
//       descripcion = 'Las personas nacidas en el año del conejo son amables y sensibles, con una gran habilidad para las relaciones interpersonales y la diplomacia. Son amantes de la belleza y a menudo tienen un gran talento para las artes visuales y la moda.';
//       break;
//     case 'Dragón':
//       descripcion = 'Las personas nacidas en el año del dragón son poderosas y carismáticas, con una gran energía y un fuerte sentido del liderazgo. Son apasionadas y a menudo tienen un gran talento para la política y la organización.';
//       break;
//     case 'Serpiente':
//       descripcion = 'Las personas nacidas en el año de la serpiente son astutas y observadoras, con una gran capacidad para analizar y entender el mundo que les rodea. Son intuitivas y a menudo tienen un gran talento para la ciencia y la investigación.';
//       break;
//     case 'Caballo':
//       descripcion = 'Las personas nacidas en el año del caballo son enérgicas y libres, con una gran pasión por la aventura y la exploración. Son trabajadoras y a menudo tienen un gran talento para el deporte y la actividad física.';
//       break;
//     case 'Cabra':
//       descripcion = 'Las personas nacidas en el año de la cabra son amables y sensibles, con una gran habilidad para la empatía y la compasión. Son artistas y a menudo tienen un gran talento para la música y la literatura.';
//       break;
//     case 'Mono':
//       descripcion = 'Las personas nacidas en el año del mono son inteligentes y divertidas, con una gran habilidad para la creatividad y la invención. Son sociables y a menudo tienen un gran talento para la comunicación y el entretenimiento.';
//       break;
//     case 'Gallo':
//       descripcion = 'Las personas nacidas en el año del gallo son valientes y apasionadas, con una gran energía y un fuerte sentido de la justicia. Son trabajadoras y a menudo tienen un gran talento para la agricultura y la ganadería.';
//       break;
//     case 'Perro':
//       descripcion = 'Las personas nacidas en el año del perro son leales y protectores, con una gran habilidad para la amistad y el compromiso. Son trabajadores y a menudo tienen un gran talento para la seguridad y la vigilancia.';
//       break;
//     case 'Cerdo':
//       descripcion = 'Las personas nacidas en el año del cerdo son amables y generosas, con una gran capacidad para la empatía y la compasión. Son pacíficas y a menudo tienen un gran talento para la cocina y la alimentación.';
//       break;
//   }

//   // generar la página html de respuesta
//   const html = `
//     <html>
//       <head>
//         <title>Astrología china</title>
//       </head>
//       <body>
//         <h1>Astrología china</h1>
//         <p>La fecha ${fecha} corresponde al animal del horóscopo chino "${animal}".</p>
//         <p>${descripcion}</p>
//       </body>
//     </html>
//   `;
//   res.send(html);
// });

// // iniciar el servidor en el puerto 3000
// chi.listen(3005, function () {
//     console.log('Servidor iniciado en el puerto 3005');
// });
// iniciar el servidor en el puerto 3000
app.listen(3000, function () {
  console.log('Servidor iniciado en el puerto 3000');
});
