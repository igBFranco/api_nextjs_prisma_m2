import { createStudentsDB } from "../db/students";

export default async (req: any, res: any) => {
    const {name, email, password} = req.body;
    const createStudent = await createStudentsDB(name, email, password)
    res.json({
        result: createStudent
    })
}