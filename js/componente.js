/* js/componente.js (actualizado: acepta opción 'estado' y aplica clase correspondiente) */
/**
 * crearTarjeta(options)
 * - contenedorId: id del contenedor donde se añadirá la tarjeta (string) [requerido]
 * - imagen: ruta de la imagen (string) [requerido]
 * - titulo: texto (string)
 * - precio: texto (string)
 * - descripcion: texto para reverso (string)
 * - animacion: "animacion-arriba" | "animacion-abajo" | "animacion-derecha" | "animacion-izquierda"
 * - variante: "cuadrada" | "ancha" | "alta"
 * - estado: "default" | "nuevo" | "agotado" | "oferta"  (aplica borde y fondo)
 * - estiloInline: string con variables CSS inline (ej: "--color-fondo:#fff;")
 * - tilt: boolean (activar efecto 3D tilt al mover mouse)
 *
 * Eventos emitidos: 'favoritoToggle', 'agregarCarrito', 'expandirDetalles', 'comprarProducto'
 */
function crearTarjeta(options = {}) {
  const {
    contenedorId,
    imagen,
    titulo = "",
    precio = "",
    descripcion = "",
    animacion = "animacion-arriba",
    variante = "cuadrada",
    estado = "default",
    estiloInline = "",
    tilt = true
  } = options;

  const contenedor = document.getElementById(contenedorId);
  if (!contenedor) {
    console.warn("crearTarjeta: contenedor no encontrado:", contenedorId);
    return null;
  }

  // Crear tarjeta
  const tarjeta = document.createElement("div");
  tarjeta.className = `tarjeta tarjeta--${variante} ${animacion} estado-${estado}`;
  if (estiloInline) tarjeta.setAttribute("style", estiloInline);

  tarjeta.innerHTML = `
    <div class="tarjeta-frente" role="article" aria-label="${titulo}">
      <div class="contenedor-imagen">
        <img class="imagen-tarjeta" src="${imagen}" alt="${titulo}" loading="lazy">
      </div>

      <div class="contenido">
        <h3 class="titulo-tarjeta">${titulo}</h3>
        <p class="precio-tarjeta">${precio}</p>
      </div>

      <div class="acciones" aria-hidden="false">
        <button class="boton-favorito" title="Añadir a favoritos" aria-label="Añadir a favoritos" type="button">
          <img class="icono-favorito" src="img/heart.svg" alt="favorito">
        </button>
        <button class="boton-carrito" title="Añadir al carrito" aria-label="Añadir al carrito" type="button">
          <img class="icono-carrito" src="img/cart-plus.svg" alt="carrito">
        </button>
        <button class="boton-expandir" title="Ver más detalles" aria-label="Ver más detalles" type="button">
          <img class="icono-expandir" src="img/arrow-up-right-square.svg" alt="expandir">
        </button>
      </div>
    </div>

    <div class="tarjeta-reverso" aria-hidden="true">
      <h3>Detalles</h3>
      <p>${descripcion}</p>
      <button class="boton-comprar" aria-label="Comprar" type="button">Comprar</button>
    </div>
  `;

  // Helper: aplicar animación a un botón y remover la clase al terminar
  function animarBoton(boton, claseAnim) {
    if (!boton) return;
    boton.classList.remove(claseAnim);
    void boton.offsetWidth; // forzar reflow
    boton.classList.add(claseAnim);
    const onEnd = () => {
      boton.classList.remove(claseAnim);
      boton.removeEventListener("animationend", onEnd);
    };
    boton.addEventListener("animationend", onEnd);
  }

  // Voltear tarjeta al clic general (si no se clicó un botón)
  tarjeta.addEventListener("click", (e) => {
    const esBoton = e.target.closest("button, .acciones");
    if (esBoton) return;
    tarjeta.classList.toggle("volteada");
    const reverso = tarjeta.querySelector(".tarjeta-reverso");
    if (reverso) reverso.setAttribute("aria-hidden", String(!tarjeta.classList.contains("volteada")));
  });

  // Favorito: alterna icono y anima su propio efecto
  const botonFavorito = tarjeta.querySelector(".boton-favorito");
  const imgFavorito = botonFavorito.querySelector("img");
  botonFavorito.addEventListener("click", (e) => {
    e.stopPropagation();
    const src = imgFavorito.getAttribute("src") || "";
    if (src.includes("heart-fill")) {
      imgFavorito.setAttribute("src", "img/heart.svg");
      imgFavorito.style.filter = "none";
      botonFavorito.setAttribute("aria-pressed", "false");
    } else {
      imgFavorito.setAttribute("src", "img/heart-fill.svg");
      imgFavorito.style.filter = `drop-shadow(0 0 6px var(--color-favorito))`;
      botonFavorito.setAttribute("aria-pressed", "true");
    }
    animarBoton(botonFavorito, "animar-favorito");
    tarjeta.dispatchEvent(new CustomEvent("favoritoToggle", { detail: { tarjeta, titulo, estado: imgFavorito.getAttribute("src") } }));
    console.log("Favorito Tarjeta: " + contenedorId);
  });

  // Carrito: animación propia y evento
  const botonCarrito = tarjeta.querySelector(".boton-carrito");
  botonCarrito.addEventListener("click", (e) => {
    e.stopPropagation();
    animarBoton(botonCarrito, "animar-carrito");
    tarjeta.dispatchEvent(new CustomEvent("agregarCarrito", { detail: { tarjeta, titulo } }));
    console.log("Carrito Tarjeta: " + contenedorId);
  });

  // Expandir: NO navega ni voltea; solo anima y emite evento
  const botonExpandir = tarjeta.querySelector(".boton-expandir");
  botonExpandir.addEventListener("click", (e) => {
    e.stopPropagation();
    animarBoton(botonExpandir, "animar-expandir");
    tarjeta.dispatchEvent(new CustomEvent("expandirDetalles", { detail: { tarjeta, titulo, descripcion } }));
    console.log("Expandir Tarjeta: " + contenedorId);
  });

  // Comprar: animación propia y evento
  const botonComprar = tarjeta.querySelector(".boton-comprar");
  botonComprar.addEventListener("click", (e) => {
    e.stopPropagation();
    animarBoton(botonComprar, "animar-comprar");
    tarjeta.dispatchEvent(new CustomEvent("comprarProducto", { detail: { tarjeta, titulo } }));
    console.log("Comprar Tarjeta: " + contenedorId);
  });

  // Manejo de imagen para evitar romper layout
  const imgEl = tarjeta.querySelector(".imagen-tarjeta");
  imgEl.addEventListener("error", () => { imgEl.style.display = "none"; });

  // Tilt 3D opcional
  if (tilt) {
    tarjeta.classList.add("tilt-enabled");
    let rect = null;
    const maxTilt = 6;
    const onMove = (ev) => {
      rect = tarjeta.getBoundingClientRect();
      const x = (ev.clientX - rect.left) / rect.width;
      const y = (ev.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * maxTilt * -1;
      const tiltY = (x - 0.5) * maxTilt;
      tarjeta.style.transform = `perspective(1200px) translateY(-6px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    };
    const onLeave = () => { tarjeta.style.transform = ""; };
    tarjeta.addEventListener("mousemove", onMove);
    tarjeta.addEventListener("mouseleave", onLeave);
    tarjeta.addEventListener("blur", onLeave);
  }

  // Añadir al contenedor
  contenedor.appendChild(tarjeta);

  return tarjeta;
}

/* Exponer globalmente */
window.crearTarjeta = crearTarjeta;
