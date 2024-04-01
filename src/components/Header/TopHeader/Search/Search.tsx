import { ChangeEvent, FormEvent, useState } from "react"
import { SearchIcon } from "../../../../images/centerIcons"

import { useMyContext } from "../../../../context/context"
import SearchItems from "./SearchItems"
const Search = () => {
  const { langCode } = useMyContext()
  const [SearchInput, setSearchInput] = useState<string>("")
  const [checkFocus, setCheckFocus] = useState<boolean>(false)
  const HandleSearch = (e: FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log("hello")
  }
  const ChangeSearch = (e: ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)
  const handleFocus = () => setCheckFocus(true)

  const handleBlur = () => setCheckFocus(true)

  return (
    <form onSubmit={HandleSearch} className='w-full lg:pb-10'>
      <div className='relative w-full'>
        <SearchItems
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          ChangeSearch={ChangeSearch}
          SearchInput={SearchInput}
          checkFocus={checkFocus}
        />
        <button
          type='submit'
          className='absolute bottom-0 top-1 bg-green-500 px-4 py-[17px]   rounded-sm text-white flex items-center justify-center  right-1 h-full text-2xl '
          onClick={HandleSearch}
        >
          {SearchIcon}
        </button>
      </div>
    </form>
  )
}
export default Search
