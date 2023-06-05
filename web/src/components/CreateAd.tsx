import {useState, useEffect, FormEvent} from "react"
import * as ToggleGroup from "@radix-ui/react-toggle-group"

import Input from "./form/Input"

import gameController from "../assets/game-controller.svg"

interface Game {
    id: string,
    title: string
}

function createAd() {
    const [games, setGames] = useState<Game[]>([])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [weekDays, setWeekDays] = useState<string[]>([])

    async function getGames() {
        const response = await fetch("http://localhost:3000/games")
        const data = await response.json()

        setGames(data.games)
    }
    
    useEffect(() => {
        getGames()
    }, [])

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)       
        formData.append("weekDays", JSON.stringify(weekDays))

        const data = Object.fromEntries(formData)
        const urlEncoded = new URLSearchParams(data as Record<string, string>)

        const response = await fetch(`http://localhost:3000/games/${data.game}/ads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: urlEncoded
        })

        console.log(response)
        console.log(await response.json())
    }

    function CreateAd() {
        return (
            <div className={`absolute top-0 left-0 w-full h-full ${isMenuOpen ? "block" : "hidden"}`}>
                <div className={`w-full h-full bg-[#00000099]`} onClick={toggleMenu}></div>
                <div className="absolute top-[50%] left-[50%] rounded-[0.8rem] py-[3.2rem] px-[4rem] bg-[#2A2634] translate-x-[-50%] translate-y-[-50%]">
                    <h2 className="font-black text-[3.2rem] text-white mb-[3.2rem]">Publique um anúnico</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col mb-[1.6rem]">
                            <label htmlFor="gameInput" className="font-semibold text-white mb-[0.8rem]">Qual o game?</label>
                            <div className="relative w-full after:absolute after:top-[50%] after:right-[1.6rem] after:block after:w-[2.4rem] after:h-[2.4rem] after:bg-down after:translate-y-[-50%]">
                                <select id="gameInput" name="game" className="placeholder-zinc-500 text-zinc-500 w-full rounded-[0.4rem] py-[1.2rem] px-[1.6rem] bg-zinc-900 outline-none appearance-none" defaultValue="default">
                                    <option value="default" disabled>Selecione o game que deseja jogar</option>
                                    {games.map(game => (
                                        <option key={game.id} value={game.id}>{game.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        
                        <div className="flex flex-col mb-[1.6rem]">
                            <label htmlFor="nicknameInput" className="font-semibold text-white mb-[0.8rem]">Seu nome (ou nickname)</label>
                            <Input id="nicknameInput" name="nickname" type="text" placeholder="Como te chamam dentro do game?"/>
                        </div>

                        <div className="grid grid-cols-2 gap-x-[2.4rem] gap-y-[1.6rem] mb-[2.4rem]">
                            <div className="flex flex-col">
                                <label htmlFor="yearsPlayingInput" className="font-semibold text-white mb-[0.8rem]">Joga há quantos anos?</label>
                                <Input id="yearsPlayingInput" name="yearsPlaying" type="number" placeholder="Tudo bem ser ZERO"/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="discordInput" className="font-semibold text-white mb-[0.8rem]">Qual seu Discord?</label>
                                <Input id="discordInput" name="discord" type="text" placeholder="Usuário#0000"/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="weekDaysInput" className="font-semibold text-white mb-[0.8rem]">Quando costuma jogar?</label>
                                <ToggleGroup.Root type="multiple" className="flex gap-[0.4rem]" onValueChange={setWeekDays}>
                                    <ToggleGroup.Item value="0" className={`font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] ${weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"}`}>D</ToggleGroup.Item>
                                    <ToggleGroup.Item value="1" className={`font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] ${weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"}`}>S</ToggleGroup.Item>
                                    <ToggleGroup.Item value="2" className={`font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] ${weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"}`}>T</ToggleGroup.Item>
                                    <ToggleGroup.Item value="3" className={`font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] ${weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"}`}>Q</ToggleGroup.Item>
                                    <ToggleGroup.Item value="4" className={`font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] ${weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"}`}>Q</ToggleGroup.Item>
                                    <ToggleGroup.Item value="5" className={`font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] ${weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"}`}>S</ToggleGroup.Item>
                                    <ToggleGroup.Item value="6" className={`font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] ${weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"}`}>S</ToggleGroup.Item>
                                </ToggleGroup.Root>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="hourStart" className="font-semibold text-white mb-[0.8rem]">Qual horário do dia?</label>
                                <div className="flex gap-[0.8rem]">
                                    <input id="hourStart" name="hourStart" type="time" placeholder="De" className="placeholder-zinc-500 text-zinc-500 rounded-[0.4rem] py-[0.8rem] px-[1.2rem] bg-zinc-900 outline-none"/>
                                    <input id="hourEnd" name="hourEnd" type="time" placeholder="Até" className="placeholder-zinc-500 text-zinc-500 rounded-[0.4rem] py-[0.8rem] px-[1.2rem] bg-zinc-900 outline-none"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[1.2rem]">
                            <input type="checkbox" id="useVoiceChannelInput" name="useVoiceChannel" className="before:block before:w-[2.4rem] before:h-[2.4rem] w-[2.4rem] h-[2.4rem] before:bg-zinc-900 checked:before:bg-check before:bg-no-repeat before:bg-cover before:visible invisible"/>
                            <label htmlFor="useVoiceChannelInput" className="text-[1.4rem] text-white">Costumo me conectar ao chat de voz</label>
                        </div>

                        <footer className="flex justify-end gap-[1.6rem]">
                            <button type="button" className="font-semibold text-white rounded-[0.6rem] py-[1.2rem] px-[2rem] bg-zinc-500" onClick={toggleMenu}>Cancelar</button>
                            <button type="submit" className="font-semibold text-white flex gap-[1.2rem] rounded-[0.6rem] py-[1.2rem] px-[2rem] bg-violet-500"><img src={gameController}/> Encontrar duo</button>
                        </footer>
                    </form>
                </div>
            </div>
        )
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return {
        CreateAd,
        toggleMenu,
        closeMenu
    }
}

export default createAd