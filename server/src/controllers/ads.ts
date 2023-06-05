import {Request, Response} from "express"
import {PrismaClient} from "@prisma/client"

import convertHourStringToMinutes from "../utils/convert-hour-string-to-minutes"

const prisma = new PrismaClient()

async function createAd(request: Request, response: Response) {
    const {game, nickname, yearsPlaying, discord, weekDays, hourStart, hourEnd, useVoiceChannel} = request.body

    const ad = await prisma.ad.create({
        data: {
            gameId: game,
            name: nickname,
            yearsPlaying: Number(yearsPlaying),
            discord,
            weekDays: JSON.parse(weekDays).join(","),
            hourStart: convertHourStringToMinutes(hourStart),
            hourEnd: convertHourStringToMinutes(hourEnd),
            useVoiceChannel: useVoiceChannel == "on" ? true : false,
        }
    })

    return response.status(201).json({ad})
}

async function getDiscordFromAd(request: Request, response: Response) {
    const discord = await prisma.ad.findUniqueOrThrow({
        where: {
            id: request.params.id
        },
        select: {
            discord: true
        }
    })

    return response.json(discord)
}

export {
    createAd,
    getDiscordFromAd
}