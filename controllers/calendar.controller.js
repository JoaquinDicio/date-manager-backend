import { obtenerFechasProximosTresMeses } from "../utils/calendarioUtils.js";

async function crearCalendario(req, res) {
  const calendarioActual = await actualizarDisponibilidad();
  res.send(calendarioActual);
}

async function actualizarDisponibilidad() {
  const fechasDisp = obtenerFechasProximosTresMeses();
  const fechasOcupadas = await getTurnos();
  fechasOcupadas.forEach((fechaOcupada) => {
    const idx = fechasDisp.findIndex(
      (fechaDisp) => fechaDisp.date === fechaOcupada.date
    );
    fechasDisp[idx].horarios = fechasDisp[idx].horarios.filter(
      (horario) => horario.from !== fechaOcupada.from
    );
  });
  return fechasDisp;
}

//con motivos de testeo
const turnos = [
  {
    date: 1689994800000,
    from: 9,
    to: 10,
  },
  {
    date: 1689994800000,
    from: 10,
    to: 11,
  },
  {
    date: 1690081200000,
    from: 11,
    to: 12,
  },
];

async function getTurnos() {
  return turnos;
}

export default crearCalendario;
