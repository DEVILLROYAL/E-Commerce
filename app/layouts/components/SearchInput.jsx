import { Search } from "lucide-react"

export default function SearchInput() {
  return (
    <>
    <section>
      <div className="">
        <div className="p-2 flex flex-row">
          <input type="text" placeholder="Search" className="max-w-[100px] overflow-hidden m-2 text-sm outline-none text-black" />
          <div className="flex flex-col justify-center items-center cursor-pointer">
            <Search size={19}/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
