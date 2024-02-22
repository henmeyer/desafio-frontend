import { Request, Response } from "express";
import database from "../config/database";

class UserController {
  async index(req: Request, res: Response) {
    const users = await database.db.user.findMany();
    res.json({ users });
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || isNaN(Number(id))) {
      return res.status(400).json({ message: "id é obrigatório" });
    }

    const user = await database.db.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User não existe" });
    }

    res.json({ user });
  }

  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    try {
      if (!name || !email) {
        return res
          .status(400)
          .json({ message: "name e email são obrigatórios" });
      }

      const user = await database.db.user.create({
        data: {
          name,
          email,
        },
      });
      return res.status(201).json({ user });
    } catch {
      return res.status(400).json({ message: "Usuário já existe" });
    }
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      if (!name && !email) {
        return res
          .status(400)
          .json({ message: "name ou email são obrigatórios" });
      }

      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ message: "id é obrigatório" });
      }

      const user = await database.db.user.update({
        where: { id: Number(id) },
        data: {
          name,
          email,
        },
      });

      return res.status(200).json({ user });
    } catch {
      return res.status(400).json({ message: "Usuário já existe" });
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    try {
      if (!id || isNaN(Number(id))) {
        return res.status(400).json({ message: "id é obrigatório" });
      }

      await database.db.user.delete({
        where: { id: Number(id) },
      });

      return res.status(200).json({ message: "User excluído" });
    } catch {
      return res.status(400).json({ message: "Usuário não existe" });
    }
  }
}

export default new UserController();
