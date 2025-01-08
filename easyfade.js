// easyFade.js
export const initializeFadeAnimations = () => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
  
      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
  
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add("active");
        } else {
          reveal.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", reveal);
  
    // Ejecutar al cargar
    reveal();
  
    // Limpieza: elimina el evento al desmontar
    return () => {
      window.removeEventListener("scroll", reveal);
    };
};

