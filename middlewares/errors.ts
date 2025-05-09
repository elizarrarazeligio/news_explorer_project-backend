// ===== Manejo centralizado de errores =============================
export default (err: any, _req: any, res: any, _next: any) => {
  const { statusCode = 500, message } = err;
  res.status(statusCode).send({
    message:
      statusCode === 500
        ? "Error desconocido, contacte a un administrador"
        : message,
  });
};
