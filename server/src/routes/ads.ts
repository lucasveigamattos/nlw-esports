import express from "express"
import {getDiscordFromAd} from "../controllers/ads"

const router = express.Router()

router.get("/:id/discord", getDiscordFromAd)

export default router