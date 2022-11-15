import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// PUT /api/professors/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const professorId = req.query.id;
  
  const result = await prisma.public_professors.update({
    where: { id: Number(professorId)},
    data: {
        ...req.body,
      },
  })
  res.json(result)
}
