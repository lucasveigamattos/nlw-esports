interface GameBannerProps {
    name: string,
    ads: number,
    bannerUrl: string
}

function GameBanner(props: GameBannerProps) {    
    return (
        <a className="relative rounded-[0.8rem] overflow-hidden cursor-pointer">
            <img src={props.bannerUrl} alt={`${props.name} game banner`} className="w-[18rem] h-[25rem]"/>
            <div className="absolute bottom-0 flex flex-col gap-[0.4rem] w-full pt-[6.4rem] px-[1.6rem] pb-[1.6rem] bg-shadow">
                <strong className="font-bold text-white">{props.name}</strong>
                <span className="text-zinc-300">{props.ads} anúncio(s)</span>
            </div>
        </a>
    )
}

export default GameBanner