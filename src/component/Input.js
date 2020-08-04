import React, { useContext } from "react";
import { GetApiContext } from "../index";
import { HandleChange } from "../index";
import { SearchValue } from "../index";

function Input() {
  const onClickAction = useContext(GetApiContext);
  const onHandleChange = useContext(HandleChange);
  const { onSearchValue } = useContext(SearchValue);
  return (
    <>
      <select
        name="categories"
        id="categories"
        onChange={onHandleChange}
        value={onSearchValue}
      >
        <option value="animals">Animals</option>
        <option value="anime">Anime</option>
        <option value="anti-malware">Anti-MAlware</option>
        <option value="art & design">Art & Design</option>
        <option value="books">Books</option>
        <option value="business">Business</option>
        <option value="calendar">Calender</option>
        <option value="cloud storage & file sharing">
          Cloud Storage & File Sharing
        </option>
        <option value="continuous integration">Continuous Integration</option>
        <option value="cryptocurrency">Cryptocurrency</option>
        <option value="currency exchange">Currency Exchange</option>
        <option value="data validation">Data Validation</option>
        <option value="development">Development</option>
        <option value="dictionaries">Dictionaries</option>
        <option value="events">Events</option>
        <option value="finance">Finance</option>
        <option value="food & Drink">Food & Drink</option>
        <option value="games & Comics">Games & Comics</option>
        <option value="geocoding">Geocoding</option>
        <option value="government">Government</option>
        <option value="health">Health</option>
        <option value="jobs">Jobs</option>
        <option value="machine learning">Machine Learning</option>
        <option value="music">Music</option>
        <option value="news">News</option>
        <option value="open data">Open Data</option>
        <option value="open source projects">Open Source Projects</option>
        <option value="patent">Patent</option>
        <option value="personality">Personality</option>
        <option value="photography">Photography</option>
        <option value="science & math">Science & Math</option>
        <option value="security">Security</option>
        <option value="shopping">Shopping</option>
        <option value="social">Social</option>
        <option value="sports & fitness">Sports & Fitness</option>
        <option value="test data">Test Data</option>
        <option value="test analysis">Test Analysis</option>
        <option value="tracking">Tracking</option>
        <option value="transportation">Transportation</option>
        <option value="url shorteners">URL Shorteners</option>
        <option value="vehicle">Vehicle</option>
        <option value="video">Video</option>
        <option value="weather">Weather</option>
      </select>
      <button className="button" onClick={onClickAction}>
        Search
      </button>
    </>
  );
}

export default Input;
