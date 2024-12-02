import { useEffect } from "react";

export default function CardIlumination() {
  useEffect(() => {
    const iluminacion = Array.from(document.querySelectorAll(".bgbefore"));

    const handleMouseMove = (e) => {
      const luz = e.currentTarget;
      const rect = luz.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX; // Normalizado (-1 a 1)
      const deltaY = (y - centerY) / centerY;

      luz.style.setProperty("--x", `${x}px`);
      luz.style.setProperty("--y", `${y}px`);

      const rotateX = -deltaY * 5; 
      const rotateY = deltaX * 5; 
      luz.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

      luz.classList.add("active");
    };

    const handleMouseLeave = (e) => {
      const luz = e.currentTarget;
      luz.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
      luz.classList.remove("active");
    };

    iluminacion.forEach((luz) => {
      luz.addEventListener("mousemove", handleMouseMove);
      luz.addEventListener("mouseleave", handleMouseLeave);
    });

    // Limpieza
    return () => {
      iluminacion.forEach((luz) => {
        luz.removeEventListener("mousemove", handleMouseMove);
        luz.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return null;
}
