import React, { useEffect } from "react";
import { initializeFadeAnimations } from "./fadeAnimations"; // Importa la función del archivo easyfade.js
import "./styles.css"; // Importa las clases CSS

const Ejemplo = () => {
  useEffect(() => {
    // Inicializa las animaciones al cargar el componente
    const cleanup = initializeFadeAnimations();

    // Cleanup al desmontar
    return cleanup;
  }, []);

  return (
    <div>
      <h1>Animaciones Fade en Scroll</h1>
      <div className="reveal">Animación basica</div>
      <div className="reveal fade-bottom">Animación hacia abajo</div>
      <div className="reveal fade-left">Animación hacia la izquierda</div>
      <div className="reveal fade-right">Animación hacia la derecha</div>
    </div>
  );
};

export default Ejemplo;