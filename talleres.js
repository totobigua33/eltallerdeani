const talleres = {
  remeras: {
    nivel: 'Indumentaria',
    titulo: 'Todo sobre remeras',
    intro: 'Un recorrido práctico por las etapas principales para crear remeras con terminaciones prolijas.',
    incluye: ['Tipos de telas recomendadas para remeras', 'Preparación y ubicación de las piezas', 'Armado de hombros, laterales y mangas', 'Terminaciones de cuello y ruedo'],
    materiales: 'Tela de punto, hilo adecuado, tijera, alfileres o clips, cinta métrica y máquina de coser.',
    modalidad: 'Contenido de ejemplo: curso online paso a paso, pensado para avanzar a tu ritmo.'
  },
  superior: {
    nivel: 'Moldería',
    titulo: 'Moldes base: parte superior',
    intro: 'Aprendé los fundamentos para construir un molde base de la parte superior a partir de medidas.',
    incluye: ['Toma correcta de medidas', 'Trazado de líneas principales', 'Construcción del delantero y la espalda', 'Comprobación y ajustes básicos del molde'],
    materiales: 'Papel para moldes, lápiz, goma, regla, escuadra, cinta métrica y calculadora.',
    modalidad: 'Contenido de ejemplo: curso online con demostraciones claras y ejercicios de práctica.'
  },
  pantalon: {
    nivel: 'Moldería',
    titulo: 'Molde base de pantalón',
    intro: 'Construí un molde base de pantalón y comprendé cómo relacionar las medidas con cada parte del trazado.',
    incluye: ['Medidas necesarias para el pantalón', 'Trazado de delantero y espalda', 'Ubicación de cintura, cadera, tiro y pierna', 'Revisión del molde y ajustes iniciales'],
    materiales: 'Papel para moldes, lápiz, goma, regla larga, escuadra, curva y cinta métrica.',
    modalidad: 'Contenido de ejemplo: curso online paso a paso con explicación del trazado completo.'
  },
  maquina: {
    nivel: 'Principiantes',
    titulo: 'Aprendé a usar tu máquina de coser',
    intro: 'Un curso inicial para conocer tu máquina, prepararla correctamente y comenzar a coser con seguridad.',
    incluye: ['Partes y funciones principales', 'Colocación de aguja, hilo y bobina', 'Enhebrado y regulación de tensión', 'Costura recta, remate y ejercicios de práctica'],
    materiales: 'Máquina de coser, manual del equipo, hilo, agujas, retazos de tela y tijera.',
    modalidad: 'Contenido de ejemplo: curso online para principiantes con ejercicios progresivos.'
  }
};
const key = new URLSearchParams(location.search).get('taller') || 'remeras';
const t = talleres[key] || talleres.remeras;
document.title = t.titulo + ' | El taller de Ani';
document.getElementById('nivel').textContent = t.nivel;
document.getElementById('titulo').textContent = t.titulo;
document.getElementById('intro').textContent = t.intro;
document.getElementById('materiales').textContent = t.materiales;
document.getElementById('modalidad').textContent = t.modalidad;
document.getElementById('incluye').innerHTML = t.incluye.map(x => '<li>' + x + '</li>').join('');
document.getElementById('comprar').href = 'https://wa.me/5493329634879?text=' + encodeURIComponent('Hola Ani, quiero consultar por el curso: ' + t.titulo);
