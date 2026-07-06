# Componente: Tarjetas Dinámicas

## Programación Web  
**Componente:** Tarjetas Dinámicas  
**Autor:** Flores Santiago Wilver Alfredo  
**Qué problema resuelve:** Provee un componente reutilizable para mostrar productos (o ítems) con **tarjetas dinamicas** que incluyen animaciones de entrada, microinteracciones por botón (favorito, carrito, expandir), variantes de tamaño (cuadrada, ancha, alta) y estados visuales (default, nuevo, agotado, oferta). Facilita integrar catálogos visuales consistentes sin reescribir estilos o lógica de interacción.

---

## Instalación
Copia los archivos del componente en tu proyecto y enlázalos en tu HTML:

```html
<!-- En el head -->
<link rel="stylesheet" href="css/componente.css" />
<link rel="stylesheet" href="css/index.css" />

<!-- Antes del cierre de body -->
<script src="js/componente.js"></script>
<script src="js/index.js"></script>
```

Coloca las imágenes y los iconos en la carpeta `img/`:
- `heart.svg`, `heart-fill.svg`, `cart-plus.svg`, `arrow-up-right-square.svg`
- imágenes de producto (ej.: `auriculares-soudpeats.webp`, `galaxy-watch-8.webp`, ...)

---

## Uso (ejemplos listos para pegar)

### 1) Crear un contenedor en tu HTML
```html
<div id="tarjeta1"></div>
```

### 2) Llamada mínima a `crearTarjeta`
```javascript
crearTarjeta({
  contenedorId: "tarjeta1",
  imagen: "img/auriculares-soudpeats.webp",
  titulo: "Auriculares Soundpeats",
  precio: "$299.00",
  descripcion: "Cancelación activa de ruido, 40h batería.",
  animacion: "animacion-arriba",   // animacion-arriba | animacion-abajo | animacion-derecha | animacion-izquierda
  variante: "cuadrada",            // cuadrada | ancha | alta
  estado: "nuevo",                 // default | nuevo | agotado | oferta
  estiloInline: "--color-fondo:#fff7f0;", // opcional: variables CSS por tarjeta
  tilt: true                       // opcional: efecto 3D al mover el mouse
});
```

### 3) Escuchar eventos emitidos por el componente
```javascript
document.addEventListener('favoritoToggle', e => console.log('favoritoToggle', e.detail));
document.addEventListener('agregarCarrito', e => console.log('agregarCarrito', e.detail));
document.addEventListener('expandirDetalles', e => {
  // redirigir o abrir modal con e.detail
  console.log('expandirDetalles', e.detail);
});
document.addEventListener('comprarProducto', e => console.log('comprarProducto', e.detail));
```
---

### 4) Personalización rápida
- Modifica variables en `:root` dentro de `css/componente.css` para cambiar colores y tamaños (`--color-primario`, `--ancho-cuadrada`, `--alto-ancha`, etc.).  
- Usa `estiloInline` para aplicar variables CSS por tarjeta.  
- `estado` controla borde/fondo visual (`estado-default`, `estado-nuevo`, `estado-agotado`, `estado-oferta`).  
- `tilt: true|false` activa/desactiva el efecto 3D.

---

## Capturas de pantalla

**Vista inicial del catálogo**  
- `img/preview_catalogo.png` — vista del componente en la página.

**Reverso de las tarjetas (detalle y botón Comprar)**  
- `img/revera_catologo.png` — vista del reverso de las tarjetas.

**Consola mostrando respuesta a clics en botones**  
- `img/botones_clic_catalogo.png` — salida en consola de los eventos en los botones.

---

## Video promocional
Accede a la presentación en:
- [Video - Demo en OneDrive](https://1drv.ms/v/c/e80e64ce78a0815e/IQAyG7q86yVbS6DXtVLlLsWrAXvmkkwdTZ0FNyVDrLD73OQ?e=SkaaiY)

**Guion (lectura ~50–60s):**
```
Hola, soy Wilver. Este componente de Tarjetas Dinámicas resuelve un problema común: mostrar productos con un diseño consistente y microinteracciones sin repetir código. 
Incluye variantes (cuadrada, ancha, alta), estados visuales (nuevo, agotado, oferta) y eventos para integrar carrito o abrir detalles. 
Para usarlo: añade los archivos CSS y JS, crea un contenedor en tu HTML y llama a crearTarjeta({...}) con contenedorId, imagen, titulo, precio, animacion, variante y estado. 
Escucha los eventos 'favoritoToggle', 'agregarCarrito', 'expandirDetalles' y 'comprarProducto' para conectar tu lógica. 
En pantalla verás cómo las tarjetas entran con animación, los botones animan al hacer clic y el reverso muestra el botón Comprar. 
Descarga el repositorio, copia los archivos y pruébalo en tu proyecto. Gracias.
```
---

## Estructura del repositorio 
```
/ACTIVIDAD_3_COMPONENTE_VISUAL
├─ README.md
├─ index.html
├─ css/
│  ├─ componente.css
│  └─ index.css
├─ js/
│  ├─ componente.js
│  └─ index.js
└─ img/
   ├─ auriculares-soudpeats.webp
   ├─ galaxy-watch-8.webp
   ├─ galxy-s26-ultra.png
   ├─ power-bank-anker.webp
   ├─ heart.svg
   ├─ heart-fill.svg
   ├─ cart-plus.svg
   ├─ arrow-up-right-square.svg
   ├─ preview_catalogo.png
   ├─ reversa_catalogo.png
   └─ botones_clic_catalogo.png
```
## GitHub Pages y repositorio
- **Link al repositorio público:**
- **Link a GitHub Pages:** 