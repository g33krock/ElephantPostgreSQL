const Pool = require('pg').Pool;
const pool = new Pool({
    user:"baermmev",
    password:"4YfDg5m_yNSRYUJB04EKKfwjUbMgjpew",
    host:"suleiman.db.elephantsql.com",
    port:5432,
    database:"baermmev"
})

let getImages = (request, response) => {
	pool.query('SELECT image FROM teachers ORDER BY teacher_id ASC', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows);
	})
}

const getUsers = (request, response) => {
	pool.query('SELECT * FROM teachers ORDER BY teacher_id ASC', (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).json(results.rows)
	})
}
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    
    console.log("Successful connection... you are the best!")
    pool.query('SELECT * FROM teachers WHERE teacher_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  const createUser = (request, response) => {
    const { teacher_id, firstname, lastname, campus, role, image } = request.body
  
    pool.query('INSERT INTO teachers (teacher_id, firstname, lastname, campus, role, image) VALUES ($1, $2, $3, $4, $5, $6)', [teacher_id, firstname, lastname, campus, role, image], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added`)
    })
  }
  
  function updateUser(request, response) {
  const id = parseInt(request.params.id);
  const { firstname, lastname, campus, role, teacher_id } = request.body;


  pool.query('UPDATE teachers SET firstname = $1, lastname = $2, campus = $3, role = $4 WHERE teacher_id = $5', [firstname, lastname, campus, role, teacher_id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified`);
    }
  )
}
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    
    pool.query('DELETE FROM teachers WHERE teacher_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted`)
    })
    
  }

  const getStudents = (request, response) => {
    pool.query('SELECT * FROM students ORDER BY student_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getStudentById = (request, response) => {
    const id = parseInt(request.params.id)
    
    console.log("Successful connection... you are the best!")
    pool.query('SELECT * FROM students WHERE student_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createStudent = (request, response) => {
    const { 
      firstname, 
      lastname, 
      grade, 
      campus,
      parent1firstname,
      parent1lastname,
      parent1email,
      parent1phone,
      parent2firstname,
      parent2lastname,
      parent2email,
      parent2phone,
      image  
      
 } = request.body
  
    pool.query('INSERT INTO students (firstname, lastname, grade, campus, parent1firstname, parent1lastname, parent1email, parent1phone, parent2firstname, parent2lastname, parent2email, parent2phone, image ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)', [firstname, lastname, grade, campus, parent1firstname, parent1lastname, parent1email, parent1phone, parent2firstname, parent2lastname, parent2email, parent2phone, image], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added`)
    })
  }
  const deleteStudent = (request, response) => {
    const id = parseInt(request.params.id)
  
    
    pool.query('DELETE FROM students WHERE student_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Student deleted`)
    })
    
  }
  function updateP0StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p0subject,
      p0teacher,
      p0link,
      p0para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p0subject = $2,p0teacher = $3,p0link = $4,p0para = $5 WHERE student_id = $1', [student_id, p0subject,p0teacher,p0link,p0para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP1StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP2StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP3StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP4StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP5StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP6StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP7StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP8StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP9StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }

  function updateP10StudentSchedule(request, response) {
    const id = parseInt(request.params.id);
    const {
      student_id,
      p1subject,
      p1teacher,
      p1link,
      p1para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p1subject = $2,p1teacher = $3,p1link = $4,p1para = $5 WHERE student_id = $1', [student_id, p1subject,p1teacher,p1link,p1para], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
  }


  
  module.exports = {
    getImages,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getStudents,
    createStudent,
    deleteStudent,
    updateP0StudentSchedule,
    updateP1StudentSchedule,
    updateP2StudentSchedule,
    updateP3StudentSchedule,
    updateP4StudentSchedule,
    updateP5StudentSchedule,
    updateP6StudentSchedule,
    updateP7StudentSchedule,
    updateP8StudentSchedule,
    updateP9StudentSchedule,
    updateP10StudentSchedule,
    getStudentById
  }