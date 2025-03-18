import { createContext, useState } from "react";
import { Items } from "./components/Data";

export const SearchContext = createContext()

const CheckContext = ({children})=>{
    
    const [searchValue, setSearchValue] = useState("");

    // handing the text on the search input
    const handleSearchChange = (val) => {
      setSearchValue(val);
    };
  
    // search filter function
    const filteredGadgets =
      searchValue !== ""
       ? Items[1].gadgetItems?.filter((gadgetItem) =>
            gadgetItem.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        : Items[1].gadgetItems;

   return (
      <SearchContext.Provider value={{
        handleSearchChange,
        filteredGadgets
      }}>
           
           {children}

      </SearchContext.Provider>
   )

}

export default CheckContext;