import { PrismaClient } from "@prisma/client";

class Database {
  db: PrismaClient;

  constructor() {
    this.db = new PrismaClient();
  }

  async disconnect() {
    await this.db.$disconnect();
  }
}

export default new Database();
