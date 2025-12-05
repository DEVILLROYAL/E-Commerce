import Profile from "./components/Profile";
import SearchInput from "./components/SearchInput";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <>
        <header className="w-full h-16 flex border flex-row gap-5 justify-between box-border">
          <div className="flex m-2 w-full flex-row justify-between gap-3">
            <div className="flex justify-center items-center">
                <a href="/"><p className='font-sans text-xl text-green-400' >Green <span className="text-black">Store</span></p></a>
            </div>
            <div className='border border-green-400 flex flex-col justify-center h-full rounded-full'>
              <SearchInput/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
            </div>
            <div className='flex gap-2'>
              <div className="flex justify-center items-center">
                <ShoppingCart/>
              </div>
              <div className="flex justify-center items-center">
                <Profile/>
              </div>
            </div>
          </div>
        </header>
    </>
  )
}
