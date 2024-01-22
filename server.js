import express from "express";
import cors from "cors";
import { logger } from "logger-express";

import travelsRouter from "./config/routes/travelRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";
import userRoutes from "./config/routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/api/v1", userRoutes);
app.use("/api/v1", travelsRouter);
app.use("/api/v1", loginRoutes);

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`));
