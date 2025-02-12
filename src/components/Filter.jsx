import "../styles/filter.css";

export default function Filter({ filteredValue, onFilterChange }) {
  const handleValueChange = (e) => {
    onFilterChange(e.target.value);
  };
  return (
    <div className="filterContainer">
      <input
        className="searchBox"
        type="text"
        value={filteredValue}
        onChange={handleValueChange}
      />
    </div>
  );
}
