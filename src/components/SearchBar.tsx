import { ChangeEvent } from "react";
import { setSearchQuery } from "../slices/search-slice";
import { useAppDispatch } from "../store";
import { useTypedSelector } from "../hooks/useTypedSelector";

function SearchBar() {
  const dispatch = useAppDispatch();
  const { results } = useTypedSelector((state) => state.jokes);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(setSearchQuery(query));
  };

  return (
    <div className="flex flex-col mx-auto max-w-2xl px-12 ">
      <input
        type="text"
        placeholder="Search jokes..."
        className="py-2 px-4 font-bold text-xl rounded-lg  focus:outline-none focus:ring focus:border-blue-300 text-search placeholder:text-search shadow-lg"
        autoFocus
        onChange={handleSearch}
      />
      {results.length > 0 && (
        <p className="my-3 ml-3 font-montserrat text-base">{`Found jokes: ${results.length}`}</p>
      )}
    </div>
  );
}

export default SearchBar;
