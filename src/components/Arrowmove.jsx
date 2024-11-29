import { useEffect } from "react";

export default function Arrowmove() {
  useEffect(() => {
    const btnArrow = document.querySelectorAll(".btn-arrow");

    btnArrow.forEach((btn) => {
      const arrowIcon = btn.querySelector(".arrow-icon"); 
      
      if (arrowIcon) {
        btn.addEventListener("mousemove", () => {
          arrowIcon.style.transform = "rotate(-45deg)"; 
          arrowIcon.style.transition = "transform 0.5s";
        });

        btn.addEventListener("mouseleave", () => {
          arrowIcon.style.transform = "rotate(0deg)"; 
        });
      }
    });
  }, []);

  return null;
}
