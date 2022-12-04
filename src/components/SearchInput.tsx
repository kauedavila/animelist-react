import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

type SearchInputProps = {
  value: string;
  onChange: (e: string) => void;
};

export default function SearchInput({ value, onChange }: SearchInputProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={displayValue}
      onChange={(e) => handleChange(e)}
      className="focus:outline-none px-1"
      placeholder="Buscar Animes"
    />
  );
}
