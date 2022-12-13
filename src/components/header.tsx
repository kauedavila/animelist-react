import { Link } from "react-router-dom";
import { useState } from "react";
import SearchInput from "./SearchInput";

type HeaderProps = {
  text: string;
  setText: (e: string) => void;
};

export default function Header({ text, setText }: HeaderProps) {
  const [nav, setNav] = useState("/");

  const items = [{ name: "Home", path: "/" }];

  return (
    <nav className="grid grid-cols-3 gap-x-10 bg-gray-800 w-full px-10 py-4">
      <div>
        <Link to={"/"} onClick={() => setNav("/")}>
          <img width={100} src="/logo.svg" />
        </Link>
      </div>
      {location.pathname === "/" && (
        <div className="flex justify-center">
          <SearchInput value={text} onChange={(e) => setText(e)} />
        </div>
      )}
    </nav>
  );
}
