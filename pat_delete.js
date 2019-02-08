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

    const patientDB = client.db("patientdb")
    const patients = patientDB.collection("patients")

    patients.deleteMany();
    //console.log(db.inventory.find( {} ))

    client.close()

  })