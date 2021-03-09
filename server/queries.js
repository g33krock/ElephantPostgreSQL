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
  
  module.exports = {
    getImages,
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }