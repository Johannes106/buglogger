const mongoose = require("mongoose")
// To use secrets for connecting to a database use 'dotenv' and created a file named '.env' in the root of the project
require("dotenv").config()
const dbPreUri =
  process.env.DB_URL_PRE_HOST || "NO_EXISTING_ENV_FOR_DB_URL_PRE_HOST"
const dbUriHost =
  process.env.DB_URL_HOST || "NO_EXISTING_ENV_FOR_DB_URL_PRE_HOST"
const username = process.env.DB_USER || "NO_EXISTING_ENV_FOR_DB_URL_PRE_HOST"
const password = process.env.DB_PASS || "NO_EXISTING_ENV_FOR_DB_URL_PRE_HOST"
console.log({ uriBuilded })

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uriBuilded, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log("MongoDB connected")
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = connectDB
