import { useState } from "react"
import { AddCategory, GifGrid } from "./component"



export const GifExpertApp = () => {  
  
  const [ categories, setCategories ] = useState([ 'One Punch'])
  //console.log(categories);

  const handleAddCategory = ( newCategory) => {
    if( categories.includes(newCategory)) return;
    //console.log(newCategory);
    setCategories([ newCategory, ...categories])
    //setCategories([ newCategory, ...categories])
  }
   
  return (
    <>
        {/* TITULO */}
        <h1>GifExpertApp</h1> 

        {/* INPUT */}
        <AddCategory 
          //setCategories={ setCategories }         
          onNewCategory={ handleAddCategory }
        />

        {/* LISTADO DE GIF */}
          {
            categories.map( category => (
                <GifGrid 
                  key={ category } 
                  category={ category }
                />
              ))
          }             
                  

        {/* GIF ITEM */}
       
    </>
  )
}