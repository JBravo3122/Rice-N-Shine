import React, { useState, useEffect } from "react";
import "./css/SearchBar.css";

function SearchBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [selectedRegions, setSelectedRegions] = useState({
        "Region I": false,
        "Region II": false,
        "Region III": false,
        "Region IV-A": false,
        "Region IV-B": false,
        "Region V": false,
        "Region VI": false,
        "Region VII": false,
        "Region VIII": false,
        "Region IX": false,
        "Region X": false,
        "Region XI": false,
        "Region XIII": false,
        "NCR": false,
        "CAR": false,
        "BARMM": false,
        "NIR": false,
    });

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
            if (!e.target.closest("#filterDropdown") && !e.target.closest(".filter-wrapper")) {
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
            <p><i>Search and Taste the Philippines, One Region at a Time</i></p>

            <div className="searchbar">
                <input type="text" placeholder="Search for a recipe..." />
                <button>Search</button>

                <div className="filter-wrapper" onClick={toggleDropdown}>
                    <button type="button">Filters</button>
                    {isDropdownOpen && (
                        <div
                            id="filterDropdown"
                            className="dropdown-content"
                            onClick={stopDropdownClose}
                        >
                            <div className="clearContainer">
                                <label id="filterTitle">Filter by Region&#40;s&#41;</label>
                                <button type="button" onClick={clearAllSelections}>Clear All</button><br />
                            </div>

                            <div className="filterdropdown">
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region I"]} onChange={() => toggleCheckbox("Region I")} /> Region I
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region II"]} onChange={() => toggleCheckbox("Region II")} /> Region II
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region III"]} onChange={() => toggleCheckbox("Region III")} /> Region III
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region IV-A"]} onChange={() => toggleCheckbox("Region IV-A")} /> Region IV-A
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region IV-B"]} onChange={() => toggleCheckbox("Region IV-B")} /> Region IV-B
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region V"]} onChange={() => toggleCheckbox("Region V")} /> Region V
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region VI"]} onChange={() => toggleCheckbox("Region VI")} /> Region VI
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region VII"]} onChange={() => toggleCheckbox("Region VII")} /> Region VII
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region VIII"]} onChange={() => toggleCheckbox("Region VIII")} /> Region VIII
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region IX"]} onChange={() => toggleCheckbox("Region IX")} /> Region IX
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region X"]} onChange={() => toggleCheckbox("Region X")} /> Region X
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region XI"]} onChange={() => toggleCheckbox("Region XI")} /> Region XI
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["Region XIII"]} onChange={() => toggleCheckbox("Region XIII")} /> Region XIII
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["NCR"]} onChange={() => toggleCheckbox("NCR")} /> NCR
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["CAR"]} onChange={() => toggleCheckbox("CAR")} /> CAR
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["BARMM"]} onChange={() => toggleCheckbox("BARMM")} /> BARMM
                                </label><br />
                                <label className="filter-item">
                                    <input type="checkbox" checked={selectedRegions["NIR"]} onChange={() => toggleCheckbox("NIR")} /> NIR
                                </label><br />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
