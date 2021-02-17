const Pool = require('pg'.Pool)
const pool = new Pool({
    user:"baermmev",
    password:"4YfDg5m_yNSRYUJB04EKKfwjUbMgjpew",
    host:"suleiman.db.elephantsql.com",
    port:5432,
    database:"baermmev"
})

const getUsers = (request, response) => {
    pool.connect()
    .then(() => console.log("Successful connection... you are the best!"))
    .then (() => pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }))
    .catch(e => console.log)
    .finally(() => pool.end())
  }
  
  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
    
    pool.connect()
    .then(() => console.log("Successful connection... you are the best!"))
    .then(() => pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    }))
    .catch(e => console.log)
    .finally(() => pool.end())
  }
  
  const createUser = (request, response) => {
    const { firstname, lastname, campus, role } = request.body
    
    pool.connect()
    .then(() => console.log("Successful connection... you are the best!"))
    .then(() => pool.query('INSERT INTO users (firstname, lastname, campus, role) VALUES ($1, $2, $3, $4)', [firstname, lastname, campus, role], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`User added with ID: ${result.insertId}`)
    }))
    .catch(e => console.log)
    .finally(() => pool.end())
  }
  
  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { firstname, lastname, campus, role, id } = request.body
  
    pool.connect()
    .then(() => console.log("Successful connection... you are the best!"))
    .then(() => pool.query(
      'UPDATE users SET firstname = $1, lastname = $2, campus = $3, role = $4 WHERE id = $5',
      [firstname, lastname, campus, role, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    ))
    .catch(e => console.log)
    .finally(() => pool.end())
  }
  
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.connect()
    .then(() => console.log("Successful connection... you are the best!"))
    .then(() => pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    }))
    .catch(e => console.log)
    .finally(() => pool.end())
  }
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }