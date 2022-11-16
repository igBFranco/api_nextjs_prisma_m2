import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// POST /api/students
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.public_students.create({
    data: {
      ...req.body
    },
  })
  res.json(result)
}