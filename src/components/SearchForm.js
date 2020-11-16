import React,{useRef,useEffect} from "react";
import { useSpaceyContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useSpaceyContext();
  const searchValue = useRef('');


  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  // Setting up useEffect to focies the cursor when this component renders
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className='section search'>
      <form onSubmit={(e) => e.preventDefault()} className='search-form'>
      <div className="form-control">
        <label htmlFor="name">Search your favourite cocktail... 🍸</label>
        <input id='name' ref={searchValue} onChange={searchCocktail} type="text"/>
      </div>
      </form>
    </section>
  );
};

export default SearchForm;
