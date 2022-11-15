import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// DELETE /api/students/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const studentId = req.query.id;
  
  const result = await prisma.public_students.delete({
    where: { id: Number(studentId)}
  })
  res.json(result)
}
