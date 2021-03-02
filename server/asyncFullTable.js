const {Client} = require('pg')
const client = new Client({
    user:"baermmev",
    password:"4YfDg5m_yNSRYUJB04EKKfwjUbMgjpew",
    host:"suleiman.db.elephantsql.com",
    port:5432,
    database:"baermmev"
})

execute()

async function execute(){
    try{


    await client.connect()
    console.log("connected successfully")
    const results =  await client.query("select * from teachers")
    console.table(results.rows)
    await client.end()
    console.log("Client disconnected successfully")
    }
    catch (ex)
    {
        console.log(`wtf happened?! You broke it... ${ex}`)
    }
    finally
    {
        await client.end()
        console.log("Client disconnected successfully")
    }
}