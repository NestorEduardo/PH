import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const SearchBar = () => {
  return (
    <div className="flex py-2 px-1 items-center gap-1 border-2 border-slate-400 rounded-md">
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
            type="text"
            placeholder="Buscar"
            className="border-none"
        />
    </div>
  )
}

export default SearchBar