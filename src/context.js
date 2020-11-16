import React,{createContext,useContext,useState} from 'react';


const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = createContext();
const AppProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState(true);
    const [cocktails, setCocktails] = useState([]);
    
    return (
        <AppProvider.Provider>
            {children}
        </AppProvider.Provider>
    )
}


// Custom hooks for Using context
const useSpaceyContext = () => {
    return useContext(AppContext);
}


// Exporting the necessary files
export {AppProvider,useSpaceyContext,AppContext};