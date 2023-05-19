import {Request, Response} from "express"
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function getGames(request: Request, response: Response) {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true
                }
            }
        }
    })

    return response.json({games})
}

async function getGameAds(request: Request, response: Response) {
    const ads = (await prisma.ad.findMany({
        where: {
            gameId: request.params.id
        },
        select: {
            id: true,
            name: true,
            yearsPlaying: true,
            weekDays: true,
            hourStart: true,
            hourEnd: true,
            useVoiceChannel: true,
        },
        orderBy: {
            createdAt: "desc"
        }
    })).map((ad) => {
        return {
            ...ad,
            weekDays: ad.weekDays.split(",")
        }
    })

    return response.json({ads})
}

export {
    getGames,
    getGameAds
}