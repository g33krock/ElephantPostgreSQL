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
    const { teacher_id, firstname, lastname, campus, role } = request.body
  
    pool.query('INSERT INTO teachers (teacher_id, firstname, lastname, campus, role) VALUES ($1, $2, $3, $4, $5)', [teacher_id, firstname, lastname, campus, role], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added`)
    })
  }
  
  function updateUser(request, response) {
  const id = parseInt(request.params.id);
  const { firstname, lastname, campus, role, teacher_id } = request.body;


  (() => console.log("Successful connection... you are the best!"))(() => pool.query(
    'UPDATE teachers SET firstname = $1, lastname = $2, campus = $3, role = $4 WHERE id = $5',
    [firstname, lastname, campus, role, teacher_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  ))(e => console.log);
}
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    
    (() => console.log("Successful connection... you are the best!"))
    (() => pool.query('DELETE FROM teachers WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    }))
    (e => console.log)
    
  }
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }