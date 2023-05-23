import {useState, useEffect} from "react"

import GameBanner from "./components/GameBanner.tsx"
import createAdBanner from "./components/CreateAdBanner.tsx"
import createAd from "./components/CreateAd.tsx"

import "./styles/main.css"
import logoNLWEsports from "./assets/logo-nlw-esports.svg"

interface Game {
  id: string,
  title: string,
  bannerUrl: string,
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  async function getGames() {
    const response = await fetch("http://localhost:3000/games")
    const data = await response.json()

    setGames(data.games)
  }

  useEffect(() => {
    getGames()
  }, [])

  const adBanner = createAdBanner()
  const ad = createAd()

  adBanner.subscribe(ad.toggleMenu)

  addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
      ad.closeMenu()
    }
  })

  return (
    <div className="flex flex-col items-center max-w-[134.4rem] mx-auto mt-[8rem]">
      <img src={logoNLWEsports} alt="Logo nlw-esports" className="mb-[8rem]"/>
      <h1 className="font-black text-[6.4rem] text-white mb-[6.4rem]">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>
      
      <div className="flex gap-[2.4rem] mb-[3.2rem]">
        {games.map((game) => {
          return <GameBanner key={game.id} name={game.title} bannerUrl={game.bannerUrl} ads={game._count.ads}/>
        })}
      </div>

      {adBanner.CreateAdBanner()}
      {ad.CreateAd()}
    </div>
  )
}

export default App
