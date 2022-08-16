import React from "react";
import { Input } from "antd";

export default function SearchBar({ onSearch }) {
  return (
    <div id="searchbar">
      <label>Search</label>
      <Input
        type="text"
        placeholder="Enter search query"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
