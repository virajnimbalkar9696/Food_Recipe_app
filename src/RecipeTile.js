import React from 'react'


export default function RecipeTile({recipe}) {
  return (
    <div className="recipeTile" onClick={()=>{window.open(recipe["recipe"]["url"])}}>
        
        <img className='recipetile_img' src={recipe["recipe"]["image"]}/>
      <p className="recipetile_name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
