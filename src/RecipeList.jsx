import React, { useEffect, useState } from "react";
import "./css/RecipeList.css";
import "./css/Breadcrumbs.css";
import home from "./assets/home.png";
import rArrow from "./assets/right-chevron.png";
import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import { supabase } from "./supabaseclient.js";

function RecipeList() {
  const [recipes, setRecipes] = useState([]); // where we store the recipes
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState({});
  const groupToRegionIds = {
    1: [1, 2, 3, 4, 5, 6, 7, 8],
    2: [9, 10, 11],
    3: [12, 13, 14, 15, 16, 17, 18],
  };

  const regionNames = [
    "Region I",
    "Region II",
    "Region III",
    "Region IV-A",
    "Region IV-B",
    "Region V",
    "Region VI",
    "Region VII",
    "Region VIII",
    "Region IX",
    "Region X",
    "Region XI",
    "Region XIII",
    "NCR",
    "CAR",
    "BARMM",
    "NIR",
  ];

  useEffect(() => {
    const fetchRecipes = async () => {
      let query = supabase
        .from("recipes")
        .select(
          `
        recipe_id, 
        region_id,
        recipe_name, 
        pictures(path), 
        regions!region_id(region_name, island_group!group_id(group_name))
      `
        )
        .order("region_id", { ascending: true }); // fetches all recipes

      const selectedRegionNames = Object.keys(selectedRegion).filter(
        (region) => selectedRegion[region]
      );

      const { data, error } = await query;

      if (error) {
        console.error("error fetching recipes: ", error);
      } else {
        const uniqueRecipes = data.map((recipe) => ({
          ...recipe,
          region_id: recipe.region_id,
          picture_path: recipe.pictures?.length
            ? recipe.pictures[0].path
            : "/default-image.jpg",
          region_name: recipe.regions?.region_name || "Unknown Region",
          group_id: recipe.regions?.island_group?.group_id || null,
        }));

        let filteredData = uniqueRecipes;

        if (selectedRegionNames.length > 0) {
          filteredData = filteredData.filter((recipe) =>
            selectedRegionNames.includes(recipe.region_name)
          );
        } else if (selectedGroup !== null) {
          const regionIds = groupToRegionIds[selectedGroup];
          filteredData = filteredData.filter((recipe) =>
            regionIds.includes(recipe.region_id)
          );
        }

        filteredData = filteredData.filter((recipe) =>
          recipe.recipe_name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setRecipes(filteredData);
      }
    };

    fetchRecipes();
  }, [selectedGroup, selectedRegion, searchQuery]);

  return (
    <>
      <div className="reclist-container">
        <div className="breadcrumbs-container">
          <div className="breadcrumbs">
            <p>
              <img src={home} /> Home &gt; Recipes
            </p>
          </div>
        </div>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedRegions={selectedRegion}
          setSelectedRegions={setSelectedRegion}
        />
        <div className="reclist-body">
          <div className="reclist-tabButtons">
            <div className="reclist-allButtons">
              <button
                type="button"
                className={`reclist-button ${
                  selectedGroup === null ? "reclist-selectedButton" : ""
                }`}
                onClick={() => {
                  setSelectedRegion({});
                  setSelectedGroup(null);
                }}
              >
                All
              </button>
              <button
                type="button"
                className={`reclist-button ${
                  selectedGroup === 1 ? "reclist-selectedButton" : ""
                }`}
                onClick={() => {
                  setSelectedRegion({});
                  setSelectedGroup(1);
                }}
              >
                Luzon
              </button>
              <button
                type="button"
                className={`reclist-button ${
                  selectedGroup === 2 ? "reclist-selectedButton" : ""
                }`}
                onClick={() => {
                  setSelectedRegion({});
                  setSelectedGroup(2);
                }}
              >
                Visayas
              </button>
              <button
                type="button"
                className={`reclist-button ${
                  selectedGroup === 3 ? "reclist-selectedButton" : ""
                }`}
                onClick={() => {
                  setSelectedRegion({});
                  setSelectedGroup(3);
                }}
              >
                Mindanao
              </button>
            </div>
          </div>
          <div className="allRecipes-container">
            <div className="reclist-recipes">
              {recipes.length > 0
                ? recipes.map((recipe) => (
                    <div key={recipe.recipe_id} className="recipe-card">
                      <Link to={`/recipepage/${recipe.recipe_id}`}>
                        <img
                          src={recipe.picture_path}
                          alt={recipe.recipe_name}
                        />
                        <h3>{recipe.recipe_name}</h3>
                        <p>{recipe.region_name}</p>
                      </Link>
                    </div>
                  ))
                : Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="recipe-skelCard">
                      <img></img>
                      <h3></h3>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeList;
