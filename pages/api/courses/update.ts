import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// PUT /api/courses/:id
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const courseId = req.query.id;
  
  const result = await prisma.public_courses.update({
    where: { id: Number(courseId)},
    data: {
        ...req.body,
      },
  })
  res.json(result)
}
