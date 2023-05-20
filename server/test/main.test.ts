const dotenv = require("dotenv")
dotenv.config()

const API_URL = process.env.API_URL

async function getGames() {
    const response = await fetch(`${API_URL}/games`)
    const data = await response.json()

    return {
        response,
        data
    }
}

async function getAds(gameId: string) {
    const response = await fetch(`${API_URL}/games/${gameId}/ads`)
    const data = await response.json()

    return {
        response,
        data
    }
}

describe("Testing games API", () => {
    it("Get games from API", async () => {
        const {response, data} = await getGames()

        expect(response.status).toBe(200)
        expect(data).toHaveProperty("games")
        expect(data.games).not.toBe([])
        expect(data.games.length).toBe(6)

        for (const game of data.games) {
            expect(game).toHaveProperty("id")
            expect(game).toHaveProperty("title")
            expect(game).toHaveProperty("bannerUrl")
            expect(game).toHaveProperty("_count")
            expect(game._count).toHaveProperty("ads")
        }
    })

    it("Get the ads from a specific game from API", async () => {
        let data = (await getGames()).data

        for (const game of data.games) {
            if (game._count.ads != 0) {
                const getAdsInfo = (await getAds(game.id))
                const {response, data} = getAdsInfo

                expect(response.status).toBe(200)
                expect(data).toHaveProperty("ads")
                expect(data.ads.length).not.toBe(0)

                for (const ad of data.ads) {
                    expect(ad).toHaveProperty("id")
                    expect(ad).not.toHaveProperty("gameId")
                    expect(ad).toHaveProperty("name")
                    expect(ad).toHaveProperty("yearsPlaying")
                    expect(ad).not.toHaveProperty("discord")
                    expect(ad).toHaveProperty("weekDays")
                    expect(ad.weekDays.length).not.toBe(0)
                    expect(ad).toHaveProperty("hourStart")
                    expect(ad).toHaveProperty("hourEnd")
                    expect(ad).toHaveProperty("useVoiceChannel")
                    expect(ad).not.toHaveProperty("createdAt")
                }
            }
        }
    })
})

describe("Testing ads API", () => {
    it("Get discord from a specific ad from API", async () => {
        let data = (await getGames()).data

        for (const game of data.games) {
            if (game._count.ads != 0) {
                let data = (await getAds(game.id)).data

                const response = await fetch(`${API_URL}/ads/${data.ads[0].id}/discord`)
                data = await response.json()

                expect(response.status).toBe(200)
                expect(data).toHaveProperty("discord")
            }
        }
    })
})