import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// POST /api/professors
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const result = await prisma.public_professors.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
}