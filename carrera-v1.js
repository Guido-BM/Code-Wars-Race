const velocidadEnPiesPorHoraTortugaA = 720;
const velocidadEnPiesPorHoraTortugaB = 850;
let distanciaDeVentaja = 560;

function race(velocidadTortugaA, velocidadTortugaB, distanciaDeVentaja) {
  if (velocidadTortugaA >= velocidadTortugaB || distanciaDeVentaja <= 0) {
    return console.log("La tortuga 'B' nunca alcanzará a la tortuga 'A'");
  }
  const formulaTiempoEnHoras =
    distanciaDeVentaja / (velocidadTortugaB - velocidadTortugaA);

  const horas = Math.floor(formulaTiempoEnHoras);
  const minutos = Math.floor((formulaTiempoEnHoras - horas) * 60);
  segundos = Math.floor(
    formulaTiempoEnHoras * 3600 - horas * 3600 - minutos * 60
  );
  return `${horas} horas, ${minutos} minutos y ${segundos} segundos`;
}

const tiempoDeCarrera = race(
  velocidadEnPiesPorHoraTortugaA,
  velocidadEnPiesPorHoraTortugaB,
  distanciaDeVentaja
);
console.log("Tiempo de carrera:", tiempoDeCarrera);
module.exports = race;
