import React from 'react'
import './Category.css'
function Categories({categories,onSelectCategory}) {   
  return (
    <>
     <div id ='Category'>
       <h1>Welcome to the Quiz.</h1>
       <h3>Please Select your Category</h3>
      {categories.map((cat, index) => (
          <button className='Btn' key={index} onClick={() => onSelectCategory(cat)}>
            {cat}
          </button>
        ))}
     </div>
    </>
  )
}
export default Categories
