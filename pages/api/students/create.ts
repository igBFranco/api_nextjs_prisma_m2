import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../db/db";

// POST /api/students
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { name:name, description:description, student:student, professor:professor} = req.body
  const result = await prisma.public_students.create({
    data: {
      name: name,
      description: description,
      student: {connect: { id: student}},
      professor: { connect: {id: professor}},
      ...req.body
    },
  })
  res.json(result)
}