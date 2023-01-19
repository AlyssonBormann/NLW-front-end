import { Plus } from "phosphor-react"
import logoImage from "../assets/logo.svg"

export function Header(){
  return(
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt="Habits"/>
        <button type="button" className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300">
          Novo hábito 1:12:06
          https://www.youtube.com/watch?v=HvcGBrIe_5o&ab_channel=Rocketseat
          <Plus size={20} className="text-violet-500"/>
        </button>
    </div>
  )
}