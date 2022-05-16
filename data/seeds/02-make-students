const students = [   
    { 
        student_name: 'test student', 
        student_age: 6, 
        student_grade: '1st' 
    },
]

const reading_tests = [

    { 
        rt_date: Date.now(), 
        rt_test_type: 'letter', 
        rt_complete: false,
        rt_missed: 'wyz',
        rt_comments: 'only 3 letters left to go',
        student_id: 1
     },
]

const writing_tests = [

    { 
        wt_date: Date.now(), 
        wt_test_type: 'letter', 
        wt_complete: false,
        wt_missed: 'bdfghijklmnopqruvwxyz',
        wt_comments: 'confused b and d',
        student_id: 1
     },

]

const reading_goals = [

    { 
        rg_word_count: 5,
        rg_letter_count: 26,
    },
]

const writing_goals = [

    { 
        wg_word_count: 2,
        wg_letter_count: 26,
        wg_comments: 'try writing name (test) and ace at home since we know these letters'
    },
]

const math_tests = [

    { 
        mt_date: Date.now(),
        mt_test_type: 'counting',
        mt_score: 70,
        mt_comments: 'could count 1-3 and 7-10. Need to work on 3-7',
        student_id: 1
    },
]

const math_goals = [

    { 
        mg_total_sorted: 5,
        mg_total_counted: 10
        // comments if we want them -  comments: 'blah'
    },
]

const students_goals = [

    { 
        student_id: 1,
        rg_id: 1,
        wg_id: 1,
        mg_id: 1
    },
]

exports.seed = async function (knex) {
    await knex('students').insert(students)
    await knex('reading_tests').insert(reading_tests)
    await knex('writing_tests').insert(writing_tests)
    await knex('reading_goals').insert(reading_goals)
    await knex('writing_goals').insert(writing_goals)
    await knex('math_tests').insert(math_tests)
    await knex('math_goals').insert(math_goals)
    await knex('students_goals').insert(students_goals)
}
