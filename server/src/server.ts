import express from "express"
import dotenv from "dotenv"

import gameRoutes from "./routes/games"

dotenv.config()

const app = express()
const port = process.env.PORT

app.use("/games", gameRoutes)

app.listen(port, () => {
    console.log(`> Server running on port: ${port}`)
})