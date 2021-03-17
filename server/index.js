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
app.get('/users/images', db.getImages)
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUserById)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)
app.put('/students/:id', db.updateP0StudentSchedule)
app.put('/students/:id', db.updateP1StudentSchedule)
app.put('/students/:id', db.updateP2StudentSchedule)
app.put('/students/:id', db.updateP3StudentSchedule)
app.put('/students/:id', db.updateP4StudentSchedule)
app.put('/students/:id', db.updateP5StudentSchedule)
app.put('/students/:id', db.updateP6StudentSchedule)
app.put('/students/:id', db.updateP7StudentSchedule)
app.put('/students/:id', db.updateP8StudentSchedule)
app.put('/students/:id', db.updateP9StudentSchedule)
app.put('/students/:id', db.updateP10StudentSchedule)
app.get('/students', db.getStudents)
app.get('/students/:id', db.getStudentById)
app.post('/students', db.createStudent)
app.delete('/students/:id', db.deleteStudent)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})