import { useEffect, useState } from "react";
import "./css/RecipeTemplate.css";
import { useParams } from "react-router-dom";
import { supabase } from "./supabaseclient";

function RecipeTemplate() {
  const [recipe, setRecipe] = useState(null);
  const { recipe_id } = useParams();
  const parsedRecipeId = parseInt(recipe_id, 10);
  const [currentStep, setCurrentStep] = useState(0);

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
          `recipe_id, recipe_name, pictures(path), ingredients(amount, ingredients_name), steps(instruction), description(desc)`
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

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  console.log("recipe: ", recipe);

  if (!recipe)
    return (
      <>
        <div className="recipetempcontainercontaier">
          <div className="recipetemplatecontainer">
            <h1 className="recipetemp-name-skel"></h1>
            <h2 className="recipetemp-subname-skel"></h2>
            <p className="recipetemp-desc-skel"></p>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className="recipetempcontainercontainer">
        <div className="recipetemplatecontainer">
          <h1> {recipe.recipe_name} </h1>
          <h2 className="recipetempsubtopictitle"> Description </h2>
          {recipe.description.map((descItem, index) => (
            <p className="recipetempdesc">{descItem.desc}</p>
          ))}

          <br />

          <img
            className="recipetempimage"
            src={recipe.pictures[0].path}
            alt={recipe.recipe_name}
          />

          <br />
          <br />

          <h2 className="recipetempsubtopictitle"> Ingredients </h2>
          <div className="recipetemplist">
            <table>
              <tbody>
                {recipe.ingredients.map((ingredient, index) => {
                  const endsWithOr = ingredient.ingredients_name
                    .trim()
                    .endsWith(", or");
                  const previousEndsWithOr =
                    index > 0 &&
                    recipe.ingredients[index - 1].ingredients_name
                      .trim()
                      .endsWith(", or");

                  const hasAmount = !!ingredient.amount;
                  const nextIngredient = recipe.ingredients[index + 1];
                  const hasNextAmount = !!nextIngredient?.amount;

                  if (previousEndsWithOr) {
                    return null;
                  }

                  if (endsWithOr) {
                    return (
                      <tr key={index} className="recipetemp-ingredientlist">
                        {hasAmount && (
                          <td>
                            <span className="recipetemp-amount">
                              {ingredient.amount}
                            </span>
                          </td>
                        )}
                        <td colSpan={hasAmount ? 1 : 2}>
                          {ingredient.ingredients_name}{" "}
                          {hasNextAmount && (
                            <span className="recipetemp-amount">
                              {nextIngredient?.amount}{" "}
                            </span>
                          )}
                          {nextIngredient?.ingredients_name}
                        </td>
                      </tr>
                    );
                  } else {
                    return (
                      <tr key={index} className="recipetemp-ingredientlist">
                        {hasAmount && (
                          <td>
                            <span className="recipetemp-amount">
                              {ingredient.amount}
                            </span>
                          </td>
                        )}

                        <td colSpan={hasAmount ? 1 : 2}>
                          {ingredient.ingredients_name}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
          <br />
          <br />

          <h2 className="recipetempsubtopictitle"> Preparation </h2>
          <div className="recipetemplist">
            {recipe.steps.map((step, index) => (
              <p key={index} className="recipetemp-steps">
                <span className="recipetemp-steps-step">Step {index + 1}</span>
                <br />
                {step.instruction}
                <br />
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeTemplate;
