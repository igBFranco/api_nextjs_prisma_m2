import { prisma } from "./db";

export async function getStudentsDB() {
    return prisma.public_students.findMany();
}

export async function createStudentsDB(name: string, email: string, password: string) {
    return prisma.public_students.create({
        data: {
            name,
            email,
            password
        }
    })
}