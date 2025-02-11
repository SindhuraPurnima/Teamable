const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb') // import { MongoClient } from 'mongodb'
const { isInvalidEmail, isPayloadEmpty } = require('./src/validator')
//const myFuncs=require('./src/validator')
// Connection URL
//const DB_USER = process.env.DB_USER
//const DB_PASS = process.env.DB_PASS
//const { DB_USER, DB_PASS,DEV }=process.env
//const dbAddress = '127.0.0.1:27017'
//const url = DEV ? `mongodb://${dbAddress}` : `mongodb://${DB_USER}:${DB_PASS}@${dbAddress}?authSource=company_db`
const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url)
const dbName = 'company_db'  // naming database  companydb and assigning it to a var
const collName = 'employees' // naming collection inside database called employees and assigning it to a var

app.use(bodyParser.json())
app.use('/',express.static(__dirname+'/dist'))

const server=app.listen(3000,function(){
   console.log("app listening on port 3000")
})


app.get('/get-profile',async function(req,res){
  //const response={}

   //connect to mongodb database
   await client.connect()
   console.log('Connected successfully to database server')
   
   //accessing particular db
   const db = client.db(dbName)
   const collection = db.collection(collName)

   //get data from db
   const result = await collection.findOne({id:1})
   console.log(result)
   client.close()

   response ={}
   if (result!==null){
      response = {
    name:result.name,
    email:result.email,
    interests:result.interests
   }

   res.send(response)
   
   }
})
app.post('/update-profile',async function(req,res){
    const payload =req.body
   console.log(payload)


   if (isPayloadEmpty(payload) || isInvalidEmail(payload.email)) {
    
        res.send({error :'invalid payload. Couldnt update user profile data'})}
    else{
        //connect to mongodb
    await client.connect()
    console.log('Connected successfully to server')
    //intiates the db
     // client object uses a function called db with databasename as parameterIt doesn't create the database right away; 
    //it just refers to it. If the database exists, MongoDB will access it. 
    //If it doesn't exist yet, it will still work, and MongoDB will create it the first time you insert data into it.
    const db = client.db(dbName) //it will just access the database
    const collection = db.collection(collName) //accesses the collection within that database.
    
    //save payload data to database
    payload['id'] =1
    const updatedValues = {$set:payload}
    await collection.updateOne({id:1} /*{$unset: { intrests: "" }}*/,updatedValues,{upsert:true})
    client.close()
    
    res.send({info :"user profile data updated sucessfully"}) //sending the object  to frontend that info was updated
    }
    
})

module.exports = {
    app,
    server
}

