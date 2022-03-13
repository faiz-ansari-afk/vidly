import React from "react";
const SearchBox = ({ value, onChange }) => {
  return (
    <input
      name="query"
      class="form-control my-3"
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
