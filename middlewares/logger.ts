import winston from "winston";
import expressWinston from "express-winston";

// ===== Logs de solicitudes ========================================
export const requestLogger = expressWinston.logger({
  transports: [new winston.transports.File({ filename: "request.log" })],
  format: winston.format.json(),
});

// ===== Logs de errores ============================================
export const errorLogger = expressWinston.errorLogger({
  transports: [new winston.transports.File({ filename: "error.log" })],
  format: winston.format.json(),
});
