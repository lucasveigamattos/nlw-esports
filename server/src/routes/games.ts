import express from "express"
import {getGames, getGameAds} from "../controllers/games"

const router = express.Router()

router.get("/", getGames)
router.get("/:id/ads", getGameAds)

export default router