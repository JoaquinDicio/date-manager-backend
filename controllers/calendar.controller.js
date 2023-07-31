import { obtenerFechasProximosTresMeses } from "../utils/calendarioUtils.js";
import getTurnos from "../utils/getTurnos.js";

async function crearCalendario(req, res) {
  const calendarioActual = await actualizarDisponibilidad();
  res.send(calendarioActual);
}

async function actualizarDisponibilidad() {
  const fechasDisp = obtenerFechasProximosTresMeses();
  const fechasOcupadas = await getTurnos();
  console.log(fechasOcupadas);
  fechasOcupadas.forEach((fechaOcupada) => {
    const idx = fechasDisp.findIndex(
      (fechaDisp) => fechaDisp.date === fechaOcupada.date
    );
    if (idx !== -1) {
      fechasDisp[idx].horarios = fechasDisp[idx].horarios.filter(
        (horario) => horario.from !== fechaOcupada.from
      );
    }
  });
  return fechasDisp;
}

export default crearCalendario;
