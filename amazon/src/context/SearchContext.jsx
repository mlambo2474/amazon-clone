import { createContext, useState, useContext } from "react";

export const SearchContext = createContext()

export const SearchContextProvider = ({children})=>{
  const [searchTerm, setSearchTerm] = useState("")

    return (
<SearchContext.Provider value= {{searchTerm , setSearchTerm}}>
       {children}
</SearchContext.Provider>

    )
}

export const useSearch = ()=>{
return useContext(SearchContext) 
}