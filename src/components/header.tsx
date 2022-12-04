import { Link } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { getAnimeList } from "../services/getAnimeList";

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
      <div className="flex justify-center">
        <SearchInput value={text} onChange={(e) => setText(e)} />
      </div>
    </nav>
  );
}
