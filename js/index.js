/* js/index.js (ejemplo usando 'estado' y 'tilt') */
document.addEventListener("DOMContentLoaded", () => {

  crearTarjeta({
  contenedorId: "t1",
  imagen: "img/auriculares-soudpeats.webp",
  titulo: "default",
  precio: "$299.00",
  descripcion: "Sonido de estudio, cancelación activa de ruido.",
  animacion: "animacion-arriba",
  variante: "cuadrada",
  estado: "default",
//   estiloInline: `--color-fondo: rgb(165, 132, 209); --border-color: rgba(0,0,0,0.08);`,
  tilt: true
});

crearTarjeta({
  contenedorId: "t2",
  imagen: "img/galaxy-watch-8.webp",
  titulo: "nuevo",
  precio: "$399.00",
  descripcion: "Reloj inteligente con monitoreo avanzado.",
  animacion: "animacion-abajo",
  variante: "cuadrada",
  estado: "nuevo"
});

crearTarjeta({
  contenedorId: "t3",
  imagen: "img/galxy-s26-ultra.png",
  titulo: "agotado",
  precio: "$999.00",
  descripcion: "Smartphone de última generación.",
  animacion: "animacion-izquierda",
  variante: "cuadrada",
  estado: "agotado"
});

crearTarjeta({
  contenedorId: "t4",
  imagen: "img/power-bank-anker.webp",
  titulo: "oferta",
  precio: "$299.00",
  descripcion: "PowerBank portatil de 20,000 mAh, 165W de salida total",
  animacion: "animacion-derecha",
  variante: "cuadrada",
  estado: "oferta"
});

  crearTarjeta({
  contenedorId: "t11",
  imagen: "img/auriculares-soudpeats.webp",
  titulo: "Ariculares Soudpeats",
  precio: "$299.00",
  descripcion: "Sonido de estudio, cancelación activa de ruido.",
  animacion: "animacion-abajo",
  variante: "cuadrada",
  estado: "default",
//   estiloInline: `--color-fondo: rgb(165, 132, 209); --border-color: rgba(0,0,0,0.08);`,
  tilt: true
});

crearTarjeta({
  contenedorId: "t12",
  imagen: "img/galaxy-watch-8.webp",
  titulo: "Galaxy Watch 8",
  precio: "$399.00",
  descripcion: "Reloj inteligente con monitoreo avanzado.",
  animacion: "animacion-abajo",
  variante: "cuadrada",
  estado: "nuevo"
});

crearTarjeta({
  contenedorId: "t13",
  imagen: "img/galxy-s26-ultra.png",
  titulo: "Galaxy S26 Ultra",
  precio: "$999.00",
  descripcion: "Smartphone de última generación.",
  animacion: "animacion-arriba",
  variante: "ancha",
  estado: "agotado"
});

crearTarjeta({
  contenedorId: "t14",
  imagen: "img/power-bank-anker.webp",
  titulo: "PowerBank Anker 20",
  precio: "$299.00",
  descripcion: "PowerBank portatil de 20,000 mAh, 165W de salida total",
  animacion: "animacion-izquierda",
  variante: "alta",
  estado: "oferta"
});

});


