import { useState } from "react"

const SearchBar = (props) => {
  const [find, setFind] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();

    setFind(event.target.value);
    // Find
    // Filter
    // Brin find state to BookmarkList component
    props.filterBookmarks(event.target.value);
  }

  return (
    <div className="search--bar">
    <input type="text" placeholder="Search" onChange={handleSearch}></input>
    </div>
  )
}

export default SearchBar