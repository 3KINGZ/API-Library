import React, { useState, useEffect } from "react";
import { getAPIs } from "./services/services";
import Header from "./component/Header";
import Card from "./component/Card";
import "./App.css";

export const GetApiContext = React.createContext();
export const SearchValue = React.createContext();
export const HandleChange = React.createContext();

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getAPIs()
      .then((data) => {
        setData(data.entries);
      })
      .catch((e) => {
        setError("...Oops an error occurred while fetching APIs");
      });
  }, []);

  const onHandleChange = (e) => {
    setSearch(e.target.value);
  };

  const getApi = () => {
    const filtered = data.filter((api) => {
      return api.Category.toLowerCase() === search.toLowerCase();
    });
    setFilter(filtered);
  };

  // function getApiOnMount() {
  //   fetch(`https://api.publicapis.org/entries`)
  //     .then((res) => res.json())
  //     .then((json) => setData(json.entries))
  //     .catch((error) => {
  //       setError("...oops an error occured while loading page");
  //     });
  // }

  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div>
      <GetApiContext.Provider value={getApi}>
        <SearchValue.Provider value={search}>
          <HandleChange.Provider value={onHandleChange}>
            <Header />
          </HandleChange.Provider>
        </SearchValue.Provider>
      </GetApiContext.Provider>
      <div className="card-container">
        {filter.map((api) => (
          <Card
            key={`${api.API}-${Math.floor(Math.random * 100)}`}
            title={api.API}
            link={api.Link}
            category={api.Category}
            description={api.Description}
            cors={api.Cors}
            https={api.HTTPS}
            auth={api.Auth}
          />
        ))}
      </div>
      <div className="footer">
        Created by <a href="https://github.com/3KINGZ">Victor Kenneth</a>{" "}
        <span role="img" aria-label="sparkling heart">
          🔥
        </span>{" "}
        <a href="#top">Go UP</a>
      </div>
    </div>
  );
}

export default App;
