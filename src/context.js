import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  // Setting up function to fetch data from api url
  const fetchDrinksData = async () => {
    setLoading(true)
    try {
      const res = await fetch(`${apiUrl}${searchTerm}`);
      const data = await res.json();
      const {drinks} = data;
      if(drinks) {
        const newCocktails = drinks.map((drink) => {
          const{idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = drink
          return (
            {
              id:idDrink,
              name:strDrink,
              image:strDrinkThumb,
              info:strAlcoholic,
              glass: strGlass
            }
          )
        })
        setCocktails(newCocktails)
      }else {
        setCocktails([]);
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDrinksData();
  }, [searchTerm]);

  return <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>{children}</AppContext.Provider>;
};
// make sure use
const useSpaceyContext = () => {
  return useContext(AppContext);
};

export { useSpaceyContext, AppProvider };
