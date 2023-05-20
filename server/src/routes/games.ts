import express from "express"
import {getGames, getGameAds} from "../controllers/games"
import {createAd} from "../controllers/ads"

const router = express.Router()

router.get("/", getGames)
router.get("/:id/ads", getGameAds)
router.post("/:id/ads", createAd)

export default router