import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// DELETE /api/courses
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const courseId = req.query.id;
  
  const result = await prisma.public_courses.delete({
    where: { id: Number(courseId)}
  })
  res.json(result)
}
