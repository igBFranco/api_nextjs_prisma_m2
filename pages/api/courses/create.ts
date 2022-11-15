import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// POST /api/courses
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.public_courses.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
}