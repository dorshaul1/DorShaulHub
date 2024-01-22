import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Input from "../Input";
import { Icon } from "../Icon";
import "./SearchBar.scss";

type TProps = {
  search?: string;
  onValueChange?: (value: string) => void;
  onSubmit?: (value?: string) => void;
};

const SearchBar: React.FC<TProps> = ({ search, onValueChange, onSubmit }) => {
  const [searchedItem, setSearchedItem] = useState<string | undefined>(search);

  useEffect(() => {
    setSearchedItem(search);
  }, [search]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchedItem(value);
    onValueChange?.(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(searchedItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <Icon name="search" className="search-icon" />
        <Input
          placeholder="search"
          value={searchedItem}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};

export default SearchBar;
