
import { useState } from 'react';
import './App.css';


import Axios from "axios";
import RecipeTile from './RecipeTile';


function App() {
  const [query, setquery] = useState("");
  

  const [recipes, setrecipes] = useState([])
  

  const [healthlabel,sethealthlabel] = useState("vegan")

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthlabel}`;

  async function getRecipes()
  {
    var result= await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e)=>
  {
    e.preventDefault();//it avoids reloading page when you click submit
    getRecipes();

  }

 

  return (
    <div className="app">
      <h1>Food Recipe</h1>
      <form className="app_searchForm form5" onSubmit={onSubmit}>
        <input type="text"
           className="app_input"
           placeholder="enter ingridient" 
           value={query}
           onChange={(e)=>setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search"/>

        


        <select className="app_healthlabels">
          <option value="vegan" onClick={()=>sethealthlabel("vegan")}>Vegan</option>
          <option value="vegetarian" onClick={()=>sethealthlabel("vegetarian")}>vegetarian</option>
          <option value="Non-veg" onClick={()=>sethealthlabel("Non-veg")}>Non-veg</option>
          <option value="low-sugar" onClick={()=>sethealthlabel("low-sugar")}>low-sugar</option>
          <option value="wheat-free" onClick={()=>sethealthlabel("wheat-free")}>wheat-free</option>
        </select>
      </form>
      <div className="app_recipes" >
        {recipes.map((recipe) => {
           return <RecipeTile recipe={recipe}/>
        })} 
      </div>
    </div>
  );
}

export default App;
{/* <p>{recipe["recipe"]["label"]}</p> */}