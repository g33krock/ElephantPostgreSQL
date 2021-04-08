const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./queries')
const port = 3001

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());



app.use(express.static("public"))
app.get('/', express.static('public'))
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.put('/students/:id/periods/:periodid', db.updateStudentSchedule)
app.get('/students/:id/periods/:periodid', db.getStudentScheduleById)
app.get('/students/periods/:periodid', db.getStudentsSchedules)
app.get('/students', db.getStudents)
app.get('/students/periods', db.getStudentsSchedule)
app.get('/students/:id', db.getStudentById)
app.post('/students', db.createStudent)
app.delete('/students/:id', db.deleteStudent)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})