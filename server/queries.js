const Pool = require('pg').Pool;
const pool = new Pool({
    user:"baermmev",
    password:"4YfDg5m_yNSRYUJB04EKKfwjUbMgjpew",
    host:"suleiman.db.elephantsql.com",
    port:5432,
    database:"baermmev"
})



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
    pool.query('SELECT * FROM students ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getStudentById = (request, response) => {
    const id = parseInt(request.params.id)
    
    console.log("Successful connection... you are the best!")
    pool.query('SELECT * FROM students INNER JOIN periods ON class_id = student_id WHERE student_id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getStudentsSchedule = (request, response) => {
    pool.query('SELECT class_id, period, subject, teacher, link, para, student_id, firstname, lastname FROM students INNER JOIN schedule ON class_id = student_id', (error, results) => {
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
      iep,
      image  
      
 } = request.body
  
    pool.query('INSERT INTO students (firstname, lastname, grade, campus, iep, profile_image ) VALUES ($1, $2, $3, $4, $5, $6)', [firstname, lastname, grade, campus, iep, image], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added`)
    })
  }
  const deleteStudent = (request, response) => {
    const id = parseInt(request.params.id)
  
    
    pool.query('DELETE FROM students WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Student deleted`)
    })
    
  }

  const getStudentsSchedules = (request, response) => {
    pool.query('SELECT * FROM schedule ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getStudentScheduleById = (request, response) => {
    const studentid = parseInt(request.params.id);
    const periodid = parseInt(request.params.periodid);
    
    console.log("Successful connection... you are the best!")
    pool.query('SELECT * FROM schedule WHERE id = $1 AND period =$2', [studentid, periodid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  function updateStudentSchedule(request, response) {
    const studentid = parseInt(request.params.id);
    const periodid = parseInt(request.params.periodid);
    const {
      subject,
      teacher,
      link,
      para,
    } = request.body;

    pool.query('UPDATE schedule SET subject = $2,teacher = $3,link = $4,para = $5 WHERE student_id = $1 AND period =$6', [studentid, subject,teacher,link,para, periodid], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`User modified`);
      }
    )
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
    const {
      student_id,
      p2subject,
      p2teacher,
      p2link,
      p2para,
  } = request.body;
  
  
    pool.query('UPDATE students SET p2subject = $2,p2teacher = $3,p2link = $4,p2para = $5 WHERE student_id = $1', [student_id, p2subject,p2teacher,p2link,p2para], (error, results) => {
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
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getStudents,
    createStudent,
    deleteStudent,
    getStudentsSchedule,
    getStudentsSchedules,
    getStudentScheduleById, 
    updateStudentSchedule,
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