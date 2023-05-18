import searchIcon from "../assets/search-icon.svg"

function CreateAdBanner() {
    return (
        <div className="w-full rounded-[0.8rem] pt-[0.4rem] bg-nlw-border">
        <div className="flex justify-between items-center rounded-[0.8rem] py-[2.4rem] px-[3.2rem] bg-[#2A2634]">
          <div className="flex flex-col">
            <strong className="font-black text-[2.4rem] text-white">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>

          <button className="font-medium text-white flex gap-[1.2rem] rounded-[0.6rem] py-[1.2rem] px-[1.6rem] bg-violet-500 hover:bg-violet-600 duration-300">
            <img src={searchIcon}/>
            Publicar anúncio
          </button>
        </div>
      </div>
    )
}

export default CreateAdBanner