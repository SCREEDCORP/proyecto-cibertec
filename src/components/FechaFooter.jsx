import React, { useState, useEffect } from "react";

const FechaFooter = () => {
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    const f = new Date();
    const anio = f.getFullYear();
    setFecha(`${anio}`);

    // Función para actualizar la hora
    const actualizarHora = () => {
      const ahora = new Date();
      const anio = ahora.getFullYear();
      setFecha(`${anio}`);
    };

    actualizarHora();

    // Creamos el intervalo
    const idIntervalo = setInterval(actualizarHora, 1000);

    // cuando el componente se destruya, limpiamos el intervalo
    return () => clearInterval(idIntervalo);
  }, []);

  return (
    <>
      <span> {fecha}</span>
    </>
  );
};

export default FechaFooter;
