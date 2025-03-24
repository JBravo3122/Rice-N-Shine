import React from "react";
import "./css/RecipeList.css";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://zygtgtswjxdnaewbjdte.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5Z3RndHN3anhkbmFld2JqZHRlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI3MzE1NjcsImV4cCI6MjA1ODMwNzU2N30.ekJHNExltV8DoHIeWestXbx1YN-O4-66-uBTH329AaM"
);

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
          <div className="reclist-recipes">{/* grid here */}</div>
        </div>
      </div>
    </>
  );
}

export default RecipeList;
