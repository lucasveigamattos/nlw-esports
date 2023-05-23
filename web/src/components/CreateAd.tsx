import {useState} from "react"
import Input from "./form/Input"
import gameController from "../assets/game-controller.svg"

function createAd() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function CreateAd() {
        return (
            <div className={`absolute top-0 left-0 w-full h-full ${isMenuOpen ? "block" : "hidden"}`}>
                <div className={`w-full h-full bg-[#00000099]`} onClick={toggleMenu}></div>
                <div className="absolute top-[50%] left-[50%] rounded-[0.8rem] py-[3.2rem] px-[4rem] bg-[#2A2634] translate-x-[-50%] translate-y-[-50%]">
                    <h2 className="font-black text-[3.2rem] text-white mb-[3.2rem]">Publique um anúnico</h2>
                    <form>
                        <div className="flex flex-col mb-[1.6rem]">
                            <label htmlFor="gameInput" className="font-semibold text-white mb-[0.8rem]">Qual o game?</label>
                            <Input id="gameInput" type="text" placeholder="Selecione o game que deseja jogar"/>
                        </div>
                        
                        <div className="flex flex-col mb-[1.6rem]">
                            <label htmlFor="nicknameInput" className="font-semibold text-white mb-[0.8rem]">Seu nome (ou nickname)</label>
                            <Input id="nicknameInput" type="text" placeholder="Como te chamam dentro do game?"/>
                        </div>

                        <div className="grid grid-cols-2 gap-x-[2.4rem] gap-y-[1.6rem] mb-[2.4rem]">
                            <div className="flex flex-col">
                                <label htmlFor="yearsPlayingInput" className="font-semibold text-white mb-[0.8rem]">Joga há quantos anos?</label>
                                <Input id="yearsPlayingInput" type="number" placeholder="Tudo bem ser ZERO"/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="discordInput" className="font-semibold text-white mb-[0.8rem]">Qual seu Discord?</label>
                                <Input id="discordInput" type="text" placeholder="Usuário#0000"/>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="weekDaysInput" className="font-semibold text-white mb-[0.8rem]">Quando costuma jogar?</label>
                                <div className="flex gap-[0.4rem]">
                                    <button type="button" className="font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] bg-zinc-900">D</button>
                                    <button type="button" className="font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] bg-zinc-900">S</button>
                                    <button type="button" className="font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] bg-zinc-900">T</button>
                                    <button type="button" className="font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] bg-zinc-900">Q</button>
                                    <button type="button" className="font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] bg-zinc-900">Q</button>
                                    <button type="button" className="font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] bg-zinc-900">S</button>
                                    <button type="button" className="font-bold text-white w-[4rem] h-[4rem] rounded-[0.4rem] bg-zinc-900">S</button>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="hourStart" className="font-semibold text-white mb-[0.8rem]">Qual horário do dia?</label>
                                <div className="flex gap-[0.8rem]">
                                    <input id="hourStart" type="time" placeholder="De" className="placeholder-zinc-500 text-zinc-500 rounded-[0.4rem] py-[0.8rem] px-[1.2rem] bg-zinc-900 outline-none"/>
                                    <input id="hourEnd" type="time" placeholder="Até" className="placeholder-zinc-500 text-zinc-500 rounded-[0.4rem] py-[0.8rem] px-[1.2rem] bg-zinc-900 outline-none"/>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-[1.2rem]">
                            <input type="checkbox" id="useVoiceChannelInput" className="before:block before:w-[2.4rem] before:h-[2.4rem] w-[2.4rem] h-[2.4rem] before:bg-zinc-900 checked:before:bg-check before:bg-no-repeat before:bg-cover before:visible invisible"/>
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