import { addDays, startOfDay } from "date-fns";

// Función para obtener la lista de objetos de fecha para los próximos tres meses
function obtenerFechasProximosTresMeses() {
  const fechas = [];
  const hoy = startOfDay(new Date());

  for (let i = 0; i < 90; i++) {
    const fechaActual = {
      date: addDays(hoy, i).setHours(0),
      horarios: crearHorario(9, 18),
    };
    fechas.push(fechaActual);
  }

  return fechas;
}

function crearHorario(apertura, cierre) {
  let horario = [];
  if (apertura <= 24 && cierre <= 24) {
    for (let i = apertura; i < cierre; i++) {
      horario.push({ from: i, to: i + 1 });
    }
  }
  return horario;
}

export { obtenerFechasProximosTresMeses };
