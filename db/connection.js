const mongoose = require('mongoose')   //reqired mongoose
require('dotenv').config()  // required dotenv for getting database url

mongoose
  .connect(process.env.MONGOOSE_BASE_URL, { useNewUrlParser: true })
  .then(() => console.log('successfully connected to mongodb'))
  .catch((e) => {
    console.log('connection error', e.message)
  })

const db = mongoose.connection

module.exports = db