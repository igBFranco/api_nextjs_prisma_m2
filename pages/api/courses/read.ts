import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// GET /api/courses
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.public_courses.findMany()
  res.json(result)
}