import { celebrate, Joi } from "celebrate";

// ===== Validación para registro de usuario ========================
export const registerValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(3),
  }),
});

// ===== Validación para URL ========================================
const isValidUrl = (
  value: string,
  helpers: Joi.CustomHelpers<string>
): string | Object => {
  const valid = /https?:\/\/(w{3})?\.?.+/.test(value);
  return valid ? value : helpers.message({ custom: "Formato de URL inválido" });
};

// ===== Validación para guardar artículos ==========================
export const postArticleValidation = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required().max(50),
    title: Joi.string().required(),
    description: Joi.string().required(),
    publishedAt: Joi.string().required(),
    source: Joi.string().required(),
    url: Joi.string().required().custom(isValidUrl),
    urlToImage: Joi.string().required().custom(isValidUrl),
  }),
});

export const deleteArticleValidation = celebrate({
  params: Joi.object().keys({ articleId: Joi.string().alphanum() }),
});
