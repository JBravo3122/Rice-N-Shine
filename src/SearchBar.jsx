import React, { useState, useEffect, useRef } from "react";
import "./css/SearchBar.css";

function SearchBar({
  searchQuery,
  setSearchQuery,
  selectedRegions,
  setSelectedRegions,
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef(null);

  // Detect if browser supports Speech Recognition
  const isSpeechSupported =
    "SpeechRecognition" in window || "webkitSpeechRecognition" in window;

  // Setup recognition
  let recognition;
  if (isSpeechSupported) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "en-US";
    recognition.interimResults = false;
  }

  // Voice input handler
  const startListening = () => {
    if (recognition) {
      recognition.start();
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        inputRef.current.focus();
      };
    }
  };

  const toggleCheckbox = (region) => {
    setSelectedRegions((prev) => ({
      ...prev,
      [region]: !prev[region],
    }));
  };

  const clearAllSelections = () => {
    const cleared = {};
    for (const region in selectedRegions) {
      cleared[region] = false;
    }
    setSelectedRegions(cleared);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const stopDropdownClose = (e) => {
    e.stopPropagation();
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest("#filterDropdown") &&
        !e.target.closest(".filter-wrapper")
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="searchbarcontainer">
      <h1>Regions N' Recipes</h1>
      <p>
        <i>Search and Taste the Philippines, One Region at a Time</i>
      </p>

      <div className="searchbar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a recipe..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Search</button>

        {isSpeechSupported ? (
          <button
            onClick={startListening}
            aria-label="Voice search"
            className="voice-btn"
          >
            Voice Search
          </button>
        ) : (
          <button
            disabled
            title="Voice input is not supported in this browser"
            className="voice-btn"
          >
            Voice Search
          </button>
        )}

        <div className="filter-wrapper" onClick={toggleDropdown}>
          <button type="button">Filters</button>
          {isDropdownOpen && (
            <div
              id="filterDropdown"
              className="dropdown-content"
              onClick={stopDropdownClose}
            >
              <div className="clearContainer">
                <label id="filterTitle">Filter by Region(s)</label>
                <button type="button" onClick={clearAllSelections}>
                  Clear All
                </button>
                <br />
              </div>

              <div className="filterdropdown">
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region I"]}
                    onChange={() => toggleCheckbox("Region I")}
                  />{" "}
                  Region I
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region II"]}
                    onChange={() => toggleCheckbox("Region II")}
                  />{" "}
                  Region II
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region III"]}
                    onChange={() => toggleCheckbox("Region III")}
                  />{" "}
                  Region III
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region IV-A"]}
                    onChange={() => toggleCheckbox("Region IV-A")}
                  />{" "}
                  Region IV-A
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region IV-B"]}
                    onChange={() => toggleCheckbox("Region IV-B")}
                  />{" "}
                  Region IV-B
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region V"]}
                    onChange={() => toggleCheckbox("Region V")}
                  />{" "}
                  Region V
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region VI"]}
                    onChange={() => toggleCheckbox("Region VI")}
                  />{" "}
                  Region VI
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region VII"]}
                    onChange={() => toggleCheckbox("Region VII")}
                  />{" "}
                  Region VII
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region VIII"]}
                    onChange={() => toggleCheckbox("Region VIII")}
                  />{" "}
                  Region VIII
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region IX"]}
                    onChange={() => toggleCheckbox("Region IX")}
                  />{" "}
                  Region IX
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region X"]}
                    onChange={() => toggleCheckbox("Region X")}
                  />{" "}
                  Region X
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region XI"]}
                    onChange={() => toggleCheckbox("Region XI")}
                  />{" "}
                  Region XI
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["Region XIII"]}
                    onChange={() => toggleCheckbox("Region XIII")}
                  />{" "}
                  Region XIII
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["NCR"]}
                    onChange={() => toggleCheckbox("NCR")}
                  />{" "}
                  NCR
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["CAR"]}
                    onChange={() => toggleCheckbox("CAR")}
                  />{" "}
                  CAR
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["BARMM"]}
                    onChange={() => toggleCheckbox("BARMM")}
                  />{" "}
                  BARMM
                </label>
                <br />
                <label className="filter-item">
                  <input
                    type="checkbox"
                    checked={selectedRegions["NIR"]}
                    onChange={() => toggleCheckbox("NIR")}
                  />{" "}
                  NIR
                </label>
                <br />
              </div>
            </div>
          )}
        </div>
      </div>

      {!isSpeechSupported && (
        <p className="speech-warning">
          <i style={{ color: "gray" }}>
            Your browser does not support voice input. Try another browser for
            the best experience.
          </i>
        </p>
      )}
    </div>
  );
}

export default SearchBar;
