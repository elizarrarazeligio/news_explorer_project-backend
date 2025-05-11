// ===== Validación para formato de URL =============================
export const isValidUrl = (value: string) => {
  return /https?:\/\/(w{3})?\.?.+/.test(value);
};
