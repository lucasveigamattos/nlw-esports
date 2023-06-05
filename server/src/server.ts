import express from "express"
import cors from "cors"
import dotenv from "dotenv"

import gameRoutes from "./routes/games"
import adRoutes from "./routes/ads"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use("/games", gameRoutes)
app.use("/ads", adRoutes)

app.listen(port, () => {
    console.log(`> Server running on port: ${port}`)
})