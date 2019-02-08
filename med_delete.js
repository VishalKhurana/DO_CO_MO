
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
