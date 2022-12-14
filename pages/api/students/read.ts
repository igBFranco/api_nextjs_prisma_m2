import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// GET /api/students
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.public_students.findMany()
  res.json(result)
}