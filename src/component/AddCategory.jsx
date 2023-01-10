import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
  //  CADA COMPONENTE PUEDE TENER SU PROPIO USESTATE
  const [inputValue, setInputValue] = useState('')


  // 
  const handleChange = ({ target }) => {
    //console.log( target.value);
    setInputValue( target.value )
  }

  const handleSubmit = (e) => {   
    e.preventDefault();
    //console.log(inputValue);
    if( inputValue.trim())

    //setCategories(categories => [ inputValue, ...categories])
    //setCategories([ inputValue, ...categories ])
    onNewCategory( inputValue.trim() );
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ handleChange }
        />

    </form>
  )
}
