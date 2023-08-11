import { obtenerFechasProximosTresMeses } from "../utils/calendarioUtils.js";
import getTurnos from "../utils/getTurnos.js";

export async function crearCalendario(req, res) {
  const { speciality } = req.body;
  const calendarioActual = await actualizarDisponibilidad(speciality);
  res.send(calendarioActual);
}
//obtiene los turnos de un area especifica y los actualiza en el calendario
async function actualizarDisponibilidad(speciality) {
  //obtiene todas las fechas, incluidas las ocupadas
  const fechasDisp = obtenerFechasProximosTresMeses();
  const fechasOcupadas = await getTurnos();
  //para cada fecha ocpuada, actualiza la misma fecha en el calendario obtenido
  fechasOcupadas
    .filter((fechaOcupada) => fechaOcupada.speciality === speciality)
    .forEach((fechaOcupada) => {
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

function actualizarFechasEnCalendario() {}
