const express = require('express');
const app1 = express();


app1.get('/astrologiachina/:yyyy', (req, res) => {
  // Obtener el año de la fecha a partir de los parámetros de la ruta
  const fecha = req.params.yyyy.substring(1,5);
  const year = parseInt(fecha);
console.log(fecha);
console.log(year);
  // Calcular el animal del horóscopo chino correspondiente
  const animales = ["Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra", "Mono", "Gallo", "Perro", "Cerdo"];
  const animalIndex = (year - 4) % 12;
  const animal = animales[animalIndex];

  // Crear una descripción astronómica basada en el animal
  let descripcion = '';
  switch(animal) {
    case 'Rata':
      descripcion = 'Los nacidos bajo el signo de la Rata son astutos y adaptables.';
      imagenUrl = 'https://i.pinimg.com/564x/2e/53/ba/2e53ba0bf837ab684aeece38d00733c5.jpg';
      break;
    case 'Buey':
      descripcion = 'Los nacidos bajo el signo del Buey son fuertes y leales.';
      imagenUrl = 'https://i.pinimg.com/564x/80/c0/58/80c058d32e4aa6768944f05d8569b7dd.jpg';
      break;
    case 'Tigre':
      descripcion = 'Los nacidos bajo el signo del Tigre son valientes y apasionados.';
      imagenUrl = 'https://i.pinimg.com/564x/e8/83/f5/e883f5b246347db31e82f3a7f794e2e3.jpg'
      break;
    case 'Conejo':
      descripcion = 'Los nacidos bajo el signo del Conejo son sensibles y amables.';
      imagenUrl = 'https://i.pinimg.com/564x/12/d9/30/12d930da538df8e7b24fd24755b60e0e.jpg';
      break;
    case 'Dragón':
      descripcion = 'Los nacidos bajo el signo del Dragón son enérgicos y carismáticos.';
      imagenUrl = 'https://i.pinimg.com/564x/36/6e/22/366e22a522eb71d9bd01cc5bb1a1511e.jpg';
      break;
    case 'Serpiente':
      descripcion = 'Los nacidos bajo el signo de la Serpiente son misteriosos y sabios.';
      imagenUrl = 'https://i.pinimg.com/564x/c3/dd/30/c3dd3086064883dd4ab69e4091ac45cc.jpg';
      break;
    case 'Caballo':
      descripcion = 'Los nacidos bajo el signo del Caballo son libres y apasionados.';
      imagenUrl = 'https://i.pinimg.com/564x/0c/82/7a/0c827aef49879ccb4f02f6542eb02045.jpg';
      break;
    case 'Cabra':
      descripcion = 'Los nacidos bajo el signo de la Cabra son creativos y pacíficos.';
      imagenUrl = 'https://i.pinimg.com/564x/a0/64/45/a064457587c233399b945adcaa929dc2.jpg';
      break;
    case 'Mono':
      descripcion = 'Los nacidos bajo el signo del Mono son divertidos y astutos.';
      imagenUrl ='https://i.pinimg.com/564x/1b/96/1b/1b961bb234e135e3c9f5b958eb9960b4.jpg';
      break;
    case 'Gallo':
      descripcion =  'Los nacidos bajo el signo del Gallo son honestos y trabajadores.';
      imagenUrl = 'https://i.pinimg.com/564x/9e/92/3f/9e923f5429b3df3f49c761dc304ba63c.jpg';
      break;
    case 'Perro':
      descripcion = 'Los nacidos bajo el signo del Perro son leales y protectores.';
      imagenUrl = 'https://i.pinimg.com/564x/e4/0d/7f/e40d7f78199fd77819fa0f464c00bf6e.jpg';
      break;
    case 'Cerdo':
      descripcion = 'Los nacidos bajo el signo del Cerdo son amables y compasivos.';
      imagenUrl = 'https://i.pinimg.com/564x/38/21/0d/38210d129f2faaadf47c180308f703e4.jpg';
      break;
      default:
      descripcion = 'Error: animal no encontrado.';
      }
   
    // Crear la página HTML de respuesta
const html = `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Horoscopo chino</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">    
    </head>
<body class="row container">
    <hr>
    <div class="card mb-6 alert alert-secondary container" style="max-width: 500px;" class="col-xl-12">
        <div class="row g-0">
            <h3>Tu Animal en el Horoscopo Chino es ${animal} </h3>
            <div class="col-xl-5 bordes">
                <img src="${imagenUrl}" class="img-fluid rounded-start" alt="${animal}">
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
` ;
// Enviar la respuesta al cliente
res.send(html);
});

// Iniciar el servidor
app1.listen(3008, () => console.log('Servidor escuchando en el puerto 3008'));


