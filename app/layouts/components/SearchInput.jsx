import { Search } from "lucide-react"

export default function SearchInput() {
  return (
    <>
       <div className="flex justify-between h-full m-5 border-2 flex-col border-black rounded-full">
        <div className="flex flex-row border border-black">
          <input type="text" placeholder="Search..." className="flex m-2 outline-none max-w-16 p-2" />
          <div className="icon flex flex-col justify-center">
            <a className="cursor-pointer p-2" href="#">
                <Search height='20px'/>
            </a>
         </div>
        </div>
       </div>
    </>
  )
}
