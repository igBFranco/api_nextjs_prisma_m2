import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// DELETE /api/professors
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const professorId = req.query.id;
  
  const result = await prisma.public_professors.delete({
    where: { id: Number(professorId)}
  })
  res.json(result)
}
