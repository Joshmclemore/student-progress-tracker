const router = require('express').Router()
const Student = require('./students-model.js')

// router.get('/:student_id', (req, res, next) => {
//     Student.getStudentByID(req.params.student_id)
//         .then(resource => {
//             res.status(200).json(resource)
//         })
//         .catch(next)
// })

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong inside the students router',
        message: err.message,
        stak: err.stack,
    })
})

module.exports = router