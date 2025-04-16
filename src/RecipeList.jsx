import React, { useEffect, useState } from "react";
import "./css/RecipeList.css";
import { Link } from "react-router-dom";
import { supabase } from "./supabaseclient.js";

function RecipeList() {
  const [recipes, setRecipes] = useState([]); // where we store the recipes
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const groupToRegionIds = {
    1: [1, 2, 3, 4, 5, 6, 7, 8],
    2: [9, 10, 11],
    3: [12, 13, 14, 15, 16, 17, 18],
  };

  useEffect(() => {
    const fetchRecipes = async () => {
      let query = supabase
        .from("recipes")
        .select(
          `
        recipe_id, 
        recipe_name, 
        pictures(path), 
        regions!region_id(region_name, island_group!group_id(group_name))
      `
        )
        .order("region_id", { ascending: true }); // fetches all recipes

      if (selectedRegion) {
        query = query.eq("region_id", selectedRegion);
      } else if (selectedGroup !== null) {
        const regionIds = groupToRegionIds[selectedGroup];
        if (regionIds) {
          query = query.in("region_id", regionIds);
        }
      }

      const { data, error } = await query;

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

    fetchRecipes();
  }, [selectedGroup, selectedRegion]);

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
              <button
                type="button"
                onClick={() => {
                  setSelectedRegion(null);
                  setSelectedGroup(null);
                }}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedRegion(null);
                  setSelectedGroup(1);
                }}
              >
                Luzon
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedRegion(null);
                  setSelectedGroup(2);
                }}
              >
                Visayas
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedRegion(null);
                  setSelectedGroup(3);
                }}
              >
                Mindanao
              </button>
            </div>
          </div>
          <div className="allRecipes-container">
            <div className="reclist-sideBar">
              <h4>Regions</h4>
              <div className="reclist-regionlist">
                <ul>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(1);
                        setSelectedGroup("All");
                      }}
                    >
                      Region I
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(2);
                        setSelectedGroup("All");
                      }}
                    >
                      Region II
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(3);
                        setSelectedGroup("All");
                      }}
                    >
                      Region III
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(4);
                        setSelectedGroup("All");
                      }}
                    >
                      Region IV-A
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(5);
                        setSelectedGroup("All");
                      }}
                    >
                      Region IV-B
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(6);
                        setSelectedGroup("All");
                      }}
                    >
                      Region V
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(7);
                        setSelectedGroup("All");
                      }}
                    >
                      NCR
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(8);
                        setSelectedGroup("All");
                      }}
                    >
                      CAR
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(9);
                        setSelectedGroup("All");
                      }}
                    >
                      Region VI
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(10);
                        setSelectedGroup("All");
                      }}
                    >
                      Region VII
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(11);
                        setSelectedGroup("All");
                      }}
                    >
                      NIR
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(12);
                        setSelectedGroup("All");
                      }}
                    >
                      Region VII
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(13);
                        setSelectedGroup("All");
                      }}
                    >
                      Region IX
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(14);
                        setSelectedGroup("All");
                      }}
                    >
                      Region X
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(15);
                        setSelectedGroup("All");
                      }}
                    >
                      Region XI
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(16);
                        setSelectedGroup("All");
                      }}
                    >
                      Region XII
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(17);
                        setSelectedGroup("All");
                      }}
                    >
                      Region XIII
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        setSelectedRegion(18);
                        setSelectedGroup("All");
                      }}
                    >
                      BARMM
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
