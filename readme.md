# EasyFade

Una pequeña librería para agregar animaciones de desplazamiento a elementos en una página web. Al hacer scroll, los elementos con la clase `reveal` recibirán la clase `active` cuando entren al viewport, activando las animaciones de estilo.

*Desarrollada por Erik Jonathan Manzano Morales
*Diseñador UX/UI y Front End Developer

## Características

- Soporte para animaciones de entrada desde diferentes direcciones: abajo, arriba, izquierda y derecha.
- Compatible con cualquier framework o sitio web estático.
- Fácil de configurar y personalizar.
- Alto rendimiento en cualquier framework de Javascript

---

## Instalación

### 1. Descargar los archivos
Copia el código de los archivos `fadeAnimations.js` y `styles.css` en tu proyecto. Como puedes ver, en el js solo hay una función y el css lo puedes implementar facilmente en algun lado de tu css principal.

### 2. Importar la funcionalidad
#### Uso con JavaScript:
```javascript
import { initializeFadeAnimations } from './easyfades.js';
initializeFadeAnimations();

---

