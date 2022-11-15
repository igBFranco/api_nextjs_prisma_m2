import { getStudentsDB } from "../db/students";

export default async (req:any, res:any) => {
    const getStudents = await getStudentsDB();

    res.json({result: getStudents});
}