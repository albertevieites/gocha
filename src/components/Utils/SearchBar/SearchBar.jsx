const SearchBar = ({handleSearch}) => {
  return (
    <div className="search--bar">
    <input type="text" placeholder="Search" onChange={(event) => handleSearch(event.target.value)}></input>
    </div>
  )
}

export default SearchBar