import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// PUT /api/students/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const studentId = req.query.id;
  
  const result = await prisma.public_students.update({
    where: { id: Number(studentId)},
    data: {
        ...req.body,
      },
  })
  res.json(result)
}
