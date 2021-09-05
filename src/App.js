import "./App.css";
 import Axios from "axios";
 import { useState} from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setquery] = useState("");
const [recipes, setrecipes] = useState([]);
const [healthLabels, sethealthLabels] = useState("vegan");

const YOUR_APP_ID= "b4eb7aea";
const YOUR_APP_KEY="4bc2e07c6598b0c632b4da5e17e5ed03";

var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

async function getRecipes() {
  var result = await Axios.get(url);
  setrecipes(result.data.hits);
  console.log(result.data);
}

const onSubmit = (e) => {
  e.preventDefault();
  getRecipes();
};

  return (
    <div className="app">
     <h1 >Food Recipe Plaza 🍔</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
        type="text"
        className="app__input"
        placeholder="enter ingridient"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
        <select className="app_healthLabels">
<option onClick={() =>sethealthLabels("vegan")}>Vegan</option>


        </select>
      </form> 

      <div className="app__recipes"> 
      {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe}/>;
          })}
      </div>
    </div>
  );
}

export default App;
