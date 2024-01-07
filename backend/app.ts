import express from "express"
import mongoose from "mongoose"
import "dotenv/config"
import { DB_NAME, DB_USER, DB_PASSWORD, PORT } from "./server-constants"

const app = express()

function onServer() {
  mongoose
    .connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@$${DB_NAME}.ry40tck.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() =>
      app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
    )
}

onServer()
