import GameBanner from "./components/GameBanner.tsx"

import "./styles/main.css"
import logoNLWEsports from "./assets/logo-nlw-esports.svg"

function App() {
  return (
    <div className="flex flex-col items-center max-w-[134.4rem] mx-auto mt-[8rem]">
      <img src={logoNLWEsports} alt="Logo nlw-esports" className="mb-[8rem]"/>
      <h1 className="font-black text-[6.4rem] text-white mb-[6.4rem]">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>
      
      <div className="flex gap-[2.4rem] mb-[3.2rem]">
        <GameBanner name="League of Legends" ads={4} bannerUrl="./src/assets/banner1.png"/>
        <GameBanner name="Apex Legends" ads={4} bannerUrl="./src/assets/banner2.png"/>
        <GameBanner name="Counter Strike" ads={4} bannerUrl="./src/assets/banner3.png"/>
        <GameBanner name="World of Warcraft" ads={4} bannerUrl="./src/assets/banner4.png"/>
        <GameBanner name="Dota 2" ads={4} bannerUrl="./src/assets/banner5.png"/>
        <GameBanner name="Fortnite" ads={4} bannerUrl="./src/assets/banner6.png"/>
      </div>
    </div>
  )
}

export default App
