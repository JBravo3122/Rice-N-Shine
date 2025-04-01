import React, { useEffect, useState } from "react";
import "./css/RecipeList.css";
import { supabase, supabaseAnonKey, supabaseUrl } from "./supabaseclient.js";

function RecipeList() {
  const [recipes, setRecipes] = useState([]); // where we store the recipes

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabase
        .from("recipes")
        .select(
          `
        recipe_id, 
        recipe_name, 
        pictures!recipe_id(path), 
        regions!region_id(region_name, island_group!group_id(group_name))
      `
        )
        .order("region_id", { ascending: true }); // fetches all recipes
      console.log("Data:", data);
      console.log("Error:", error);
      if (error) {
        console.error("error fetching recipes: ", error);
      } else {
        const uniqueRecipes = data.map((recipe) => ({
          ...recipe,
          picture_path: recipe.pictures?.length
            ? recipe.pictures[0].path
            : "/default-image.jpg",
          region_name: recipe.regions?.region_name || "Unknown Region",
        }));
        setRecipes(uniqueRecipes);
      }
    };

    console.log("Supabase URL:", supabaseUrl);
    console.log("Supabase Key:", supabaseAnonKey);

    fetchRecipes();
  }, []);

  return (
    <>
      <div className="reclist-container">
        <div className="breadcrumbs">
          <p>Home &gt; Recipes</p>
        </div>
        <div className="reclist-body">
          <div className="reclist-title">
            <h1>Regions N' Recipes</h1>
            <hr />
            <p>
              <i>Taste the Philippines, One Region at a Time</i>
            </p>
          </div>
          <br />
          <div className="reclist-tabButtons">
            <div className="reclist-searchBar">
              <input type="text" placeholder="Search Recipe"></input>
            </div>
            <div className="reclist-allButtons">
              <button type="button">All</button>
              <button type="button">Luzon</button>
              <button type="button">Visayas</button>
              <button type="button">Mindanao</button>
            </div>
          </div>
          <div className="allRecipes-container">
            <div className="reclist-sideBar">
              <h4>Regions</h4>
              <div className="reclist-regionlist">
                <ul>
                  <li>
                    <a href="">Region I</a>
                  </li>
                  <li>
                    <a href="">Region II</a>
                  </li>
                  <li>
                    <a href="">Region III</a>
                  </li>
                  <li>
                    <a href="">Region IV-A</a>
                  </li>
                  <li>
                    <a href="">Region IV-B</a>
                  </li>
                  <li>
                    <a href="">Region V</a>
                  </li>
                  <li>
                    <a href="">NCR</a>
                  </li>
                  <li>
                    <a href="">CAR</a>
                  </li>
                  <li>
                    <a href="">Region VI</a>
                  </li>
                  <li>
                    <a href="">Region VII</a>
                  </li>
                  <li>
                    <a href="">NIR</a>
                  </li>
                  <li>
                    <a href="">Region VII</a>
                  </li>
                  <li>
                    <a href="">Region IX</a>
                  </li>
                  <li>
                    <a href="">Region X</a>
                  </li>
                  <li>
                    <a href="">Region XI</a>
                  </li>
                  <li>
                    <a href="">Region XII</a>
                  </li>
                  <li>
                    <a href="">Region XIII</a>
                  </li>
                  <li>
                    <a href="">BARMM</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="reclist-recipes">
              {recipes.length > 0 ? (
                recipes.map((recipe) => (
                  <div key={recipe.recipe_id} className="recipe-card">
                    <img src={recipe.picture_path} alt={recipe.recipe_name} />
                    <h3>{recipe.recipe_name}</h3>
                    <p>{recipe.region_name}</p>
                  </div>
                ))
              ) : (
                <p>Loading recipes...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeList;
