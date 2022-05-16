const db = require('../../data/db-config')

async function getStudentByID(student_id) {
    const studentRows = await db('students as s')
        .where('student_id', student_id)
    return studentRows
}

module.exports = { getStudentByID }