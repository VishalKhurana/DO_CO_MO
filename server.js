const express=require('express')
const app=express()
var socket=require('socket.io')

const path=require('path')

app.use('/',express.static(__dirname+'/public_html'))
app.use('/doctor',express.static(__dirname+'/public_html/doctor_side'))
app.use('/medical',express.static(__dirname+'/public_html/medical_store'))
app.use('/lol',express.static(__dirname+'/public_html/'))
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
const {MongoClient} = require('mongodb')

const MONGO_URL = "mongodb://localhost:27017"



app.post('/patients', (req,res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          msg: "Could Not Connect To Mongo Database"
        })
      }
  
      const patientDB = client.db("patientdb")
      const patients = patientDB.collection("patients")

      let data = req.body
      patients.insertMany([
        {
           name:data.name,
           title:data.title,
           fees:data.fees,
           test:data.test,
           token:data.token,
           date:data.date,
           phone:data.phone
          
        }])
  
      client.close()
  
    })
  })
  app.post('/medicine', (req,res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          msg: "Could Not Connect To Mongo Database"
        })
      }
  
      const medicineDB = client.db("medicinedb")
      const medicines = medicineDB.collection("medicines")

      let data = req.body
     
      
      medicines.insertMany([
        {
          medicine:data.medicine,
          Day:data.Day,
          Dose:data.Dose
          
        }])
  
      client.close()
  
    })
  })


  app.get('/patientss', (req, res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          msg: "Could Not Connect To Mongo Database"
        })
      }
  
      const patientDB = client.db("patientdb")
      const patients = patientDB.collection("patients")
  
      patients.find({}).toArray((err, results) => {
         
         
        res.json({
          success: true,
          data: results
        })
      })
  
      client.close()
  
    })
  })
  app.get('/medicined', (req, res) => {
const {MongoClient} = require('mongodb')

const MONGO_URL = "mongodb://localhost:27017"
MongoClient.connect(MONGO_URL, (err, client) => {
    if (err) {
      console.log(err);
      return res.json({
        success: false,
        msg: "Could Not Connect To Mongo Database"
      })
    }

    const medicineDB = client.db("medicinedb")
    const medicines = medicineDB.collection("medicines")

    medicines.deleteMany();
    //console.log(db.inventory.find( {} ))

    client.close()

  })
}
  )

  
  app.get('/medicine', (req, res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          msg: "Could Not Connect To Mongo Database"
        })
      }
      const medicineDB = client.db("medicinedb")
      const medicines = medicineDB.collection("medicines")
  
      medicines.find({}).toArray((err, results) => {
         
         
        res.json({
          success: true,
          data: results
        })
      })
  
      client.close()
  
    })
  })
  app.get('/list', (req, res) => {
    MongoClient.connect(MONGO_URL, (err, client) => {
      if (err) {
        console.log(err);
        return res.json({
          success: false,
          msg: "Could Not Connect To Mongo Database"
        })
      }
  
      const patientDB = client.db("patientdb")
      const patients = patientDB.collection("patients")
  
      patients.find({}).toArray((err, results) => {
         
         
        res.json({
          success: true,
          data: results
        })
      })
      //console.log(db.inventory.find( {} ))
  
      client.close()
  
    })
  })


var server=app.listen(5000,()=>{
    console.log("server is running")
}

)
var io=socket(server)
io.on('connection',function(socket) {
  console.log("made a socket")
  socket.on('chat', function (data)
  {
    io.sockets.emit('chat',data);
  })

});