import { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const queryFromUrl = searchParams.get("q") ?? "";
  const [value, setValue] = useState<string>(queryFromUrl);

  useEffect(() => {
    setValue(queryFromUrl);
  }, [queryFromUrl]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (input: string) => {
    setValue(input);

    const params = new URLSearchParams();
    if (input.trim() !== "") {
      params.set("q", input);
    }

    navigate(`/search?${params.toString()}`);
  };

  return (
    <input
      type="text"
      value={value}
      ref={inputRef}
      onChange={(e) => handleChange(e.target.value)}
      placeholder="Search..."
      className="w-full px-4 py-2 border rounded-md focus:outline-none"
    />
  );
};

export default SearchInput;
