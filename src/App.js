import React, { useState, useEffect } from "react";
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
    getApiOnMount();
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

  function getApiOnMount() {
    fetch(`https://api.publicapis.org/entries`)
      .then((res) => res.json())
      .then((json) =>
        // Save the posts into state
        setData(json.entries)
      )
      .catch((error) => {
        setError("...oops an error occured while loading page");
      });
  }

  if (error) {
    return <h1>An error while fetching APIs</h1>;
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
        Made with{" "}
        <span role="img" aria-label="sparkling heart">
          💖
        </span>{" "}
        by <a href="https://github.com/3KINGZ">Victor Kenneth</a>{" "}
        <a href="#top">Go UP</a>
      </div>
    </div>
  );
}

export default App;
