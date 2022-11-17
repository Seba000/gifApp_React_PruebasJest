import { useState } from "react";
import { AddCategory } from "./components";
import { GifGrid } from "./components";

export const GifApp = () => {
  
    const [ categories, setCategories ] = useState([ 'Hunter x Hunter' ])
    
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            <h1>Gif App </h1>

            <AddCategory onNewCategory={ onAddCategory }/>

            { 
                categories.map( (category) =>(
                    <GifGrid key={category}
                             category={category}/>    
                ))
            }
        </>
    )
}
