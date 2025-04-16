import { useEffect, useState } from "react";
import "./css/RecipeTemplate.css";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseclient";

function RecipeTemplate() {
  const [recipe, setRecipe] = useState(null);
  const { recipe_id } = useParams();
  const parsedRecipeId = parseInt(recipe_id, 10);

  console.log("first recipe id: ", parsedRecipeId);
  if (isNaN(parsedRecipeId)) {
    console.error("Invalid recipe_id, not a number");
    return;
  }

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data, error } = await supabase
        .from("recipes")
        .select(
          `recipe_id, recipe_name, pictures(path), ingredients(amount, ingredients_name), steps(instruction)`
        )
        .eq("recipe_id", parsedRecipeId)
        .single();

      console.log("in query recipe id: ", parsedRecipeId);
      console.log("data: ", data);
      console.log("error: ", error);

      if (error) {
        console.error("Error fetching recipe: ", error);
      } else {
        setRecipe(data);
      }
    };

    fetchRecipe();
  }, [recipe_id]);

  console.log("recipe: ", recipe);

  if (!recipe) return <p>Loading...</p>;

  return (
    <>
      <div className="recipetempcontainercontainer">
        <div className="recipetemplatecontainer">
          <h1> {recipe.recipe_name} </h1>
          <h2 className="recipetempsubtopictitle"> Description </h2>
          <p className="recipetempdesc">
            {" "}
            This is the description of the recipe
          </p>

          <img
            className="recipetempimage"
            src={recipe.pictures[0].path}
            alt={recipe.recipe_name}
          />

          <h2 className="recipetempsubtopictitle"> Ingredients </h2>
          <div className="recipetemplist">
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="recipetemp-ingredientlist">
                  {" "}
                  <span className="recipetemp-amount">
                    {ingredient.amount}
                  </span>{" "}
                  {ingredient.ingredients_name}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="recipetempsubtopictitle"> Preparation </h2>
          <div className="recipetemplist">
            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index} className="">
                  {step.instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeTemplate;
