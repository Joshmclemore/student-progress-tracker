// const db = require('../../data/db-config')

// async function getRecipeByID(student_id) {
//     const recipeRows = await db('recipes as r')
//         .where('recipe_id', recipe_id)
//     return recipeRows
// }

function getStudentByID(student_id) {
    return Promise.resolve(`this should return student with id:${student_id}`)
}

module.exports = { getStudentByID }