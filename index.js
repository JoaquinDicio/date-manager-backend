import app from "./app.js";
import calendarRouter from "./routes/calendar.routes.js";
import turnosRouter from "./routes/turnos.routes.js";
import usersRouter from "./routes/users.routes.js";

app.listen(8080, () => {
  console.log("Server running at 8080");
});

app.use("/api/calendar", calendarRouter);
app.use("/api/turnos/", turnosRouter);
app.use("/api/users/", usersRouter);
