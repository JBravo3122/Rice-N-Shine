import React from "react";

function RecipeList() {
  return (
    <>
      <div className="reclist-container">
        <div className="breadcrumbs">
          <p>Home &gt; Frequently Asked Questions</p>
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
          <div className="reclist-sideBar">
            <h4>Regions</h4>
            <ul>
              <li>Region I</li>
              <li>Region II</li>
              <li>Region III</li>
              <li>Region IV-A</li>
              <li>Region IV-B</li>
              <li>Region V</li>
              <li>NCR</li>
              <li>CAR</li>
              <li>Region VI</li>
              <li>Region VII</li>
              <li>NIR</li>
              <li>Region VII</li>
              <li>Region IX</li>
              <li>Region X</li>
              <li>Region XI</li>
              <li>Region XII</li>
              <li>Region XIII</li>
              <li>BARMM</li>
            </ul>
          </div>
          <div className="reclist-recipes">{/* grid here */}</div>
        </div>
      </div>
    </>
  );
}

export default RecipeList;
