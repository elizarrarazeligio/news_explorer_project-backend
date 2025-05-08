import User from "../models/user";

export const getUsers = (_req: any, res: any) => {
  User.find({})
    .orFail(() => {
      throw new Error("No se encontró ningún usuario.");
    })
    .then((users) => res.send(users))
    .catch((err) => res.status(404).send(err.message));
};

export const getCurrentUser = (_req: any, _res: any) => {};
