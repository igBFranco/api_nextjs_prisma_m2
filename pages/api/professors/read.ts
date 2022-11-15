import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// GET /api/professors
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.public_professors.findMany()
  res.json(result)
}