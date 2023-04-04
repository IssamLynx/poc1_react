import { useState } from "react";

function SearchBar({ initialData, setData }) {
  const [animeName, setAnimeName] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    const anime = initialData.filter((element) =>
      element.title.includes(animeName)
    );
    setData(anime);
  }

  function resetSearch() {
    setData(initialData);
    setAnimeName("");
  }

  return (
    <div className="flex items-center">
      <form onSubmit={handleSearch}>
        <div className="flex space-x-1">
          <input
            onChange={(event) => {
              setAnimeName(event.target.value);
            }}
            type="text"
            className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Search..."
            value={animeName}
          />
          <button
            type="submit"
            className="px-4 text-white bg-purple-600 rounded-full "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {animeName !== "" && (
            <button
              type="button"
              onClick={resetSearch}
              className="px-4 text-purple-600 border border-purple-600 rounded-full "
            >
              Clear
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
