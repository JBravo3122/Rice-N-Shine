import { useState } from "react";
import "./css/RecipeTemplate.css";

function RecipeTemplate() {
    const [count, setCount] = useState(0)

  return (
    <>
        <div className="recipetempcontainercontainer">
            <div className="recipetemplatecontainer">
                <h1> Recipe Name </h1>
                <h2 className="recipetempsubtopictitle"> Description </h2>
                <p className="recipetempdesc"> This is the description of the recipe</p>

                <img className="recipetempimage" src="https://placehold.co/600x400" alt="Recipe Image" />

                <h2 className="recipetempsubtopictitle"> Ingredients </h2>
                <div className="recipetemplist"> 
                    <ul>
                        <li> Ingredient 1 </li>
                        <li> Ingredient 2 </li>
                        <li> Ingredient 3 </li>
                    </ul>
                </div>

                <h2 className="recipetempsubtopictitle"> Preparation </h2>
                <div className="recipetemplist">
                    <ol>
                        <li> Step 1 </li>
                        <li> Step 2 </li>
                        <li> Step 3 </li>
                    </ol> 
                </div>   
            </div>
        </div>  
    </>
  );
}

export default RecipeTemplate;
