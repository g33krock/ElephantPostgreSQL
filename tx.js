const {Client} = require('pg')

const client = new Client( {
    user:"baermmev",
    password:"4YfDg5m_yNSRYUJB04EKKfwjUbMgjpew",
    host:"suleiman.db.elephantsql.com",
    port:5432,
    database:"baermmev"
})
execute()

async function execute() {
try {

    await client.connect()
    await client.query("BEGIN")
    await client.query("insert into teachers values ($1, $2, $3, $4, $5)", [1009, 'Tom', 'Riddle', 'Voldemort', 'Dark Wizard'])
    
    console.log("Inserted a new row")
    await client.query("COMMIT")

}
catch (ex){
    console.log(`You have failed at ${ex}`)
    await client.query("ROLLBACK")
}
finally{
    await client.end()
    console.log(`squeaky clean!`)
}
}

