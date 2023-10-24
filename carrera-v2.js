function race(v1, v2, g) {
  //Desde aqui abajo
  if (v1 >= v2) {
    return null;
  }

  const tiempoEnSegundos = (g / (v2 - v1)) * 3600;
  const horas = Math.floor(tiempoEnSegundos / 3600);
  const minutos = Math.floor((tiempoEnSegundos % 3600) / 60);
  const segundos = Math.floor(tiempoEnSegundos % 60);

  return [horas, minutos, segundos];
}

module.exports = race;
