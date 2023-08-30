import { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useAppDispatch } from "./store";
import { setResults } from "./slices/search-slice";
import axios from "axios";
import Card from "./components/Card";
import { apiConfig } from "./apiConfig";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "0.75rem",
};

function App() {
  const dispatch = useAppDispatch();
  const { query, results } = useTypedSelector((state) => state.jokes);

  useEffect(() => {
    if (query.length > 3) {
      axios
        .get(`${apiConfig.baseUrl}jokes/search?query=${query}`)
        .then((response) => {
          console.log(response);
          dispatch(setResults(response.data.result));
        })
        .catch((error) => {
          console.error("Error fetching results:", error);
        });
    }
  }, [query, dispatch]);

  const firstTwoResults = results.slice(0, 2);
  const remainingResults = results.slice(2);

  return (
    <div className="container mx-auto my-6 px-0.5 max-w-default">
      <SearchBar />
      <div style={gridStyle} className="mb-5">
        {firstTwoResults.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div style={gridStyle}>
        {remainingResults.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
