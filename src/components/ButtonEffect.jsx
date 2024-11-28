import { useEffect } from "react";

export default function ButtonEffect() {
  useEffect(() => {
    const btns = document.querySelectorAll(".btn");

    const handleMouseMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty("--x", `${x}px`);
      btn.style.setProperty("--y", `${y}px`);
      btn.classList.add("active");
    };

    const handleMouseLeave = (e) => {
      const btn = e.currentTarget;
      btn.classList.remove("active");
    };

    btns.forEach((btn) => {
      btn.addEventListener("mousemove", handleMouseMove);
      btn.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      btns.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMouseMove);
        btn.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return null;
}
