const {Client} = require('pg')
const client = new Client({
    user:"baermmev",
    password:"4YfDg5m_yNSRYUJB04EKKfwjUbMgjpew",
    host:"suleiman.db.elephantsql.com",
    port:5432,
    database:"baermmev"
})

client.connect()
.then(() => console.log("Successful connection... you are the best!"))
.then(() => client.query("insert into teachers values ($1, $2, $3, $4, $5)", [6, 'Tawna', 'Peters', 'Tempe', 'WaterMage']))
.then(() => client.query("select * from teachers"))
.then(results => console.table(results.rows))
.catch(e => console.log)
.finally(() => client.end())




