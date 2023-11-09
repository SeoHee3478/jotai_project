import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../data/jotai";

export default function Header() {
  const [theme] = useAtom(themeAtom);
  return (
    <header className={`header ${theme === "light" ? "light" : "dark"}`}>
      <h1>Welcome! 프론트엔드 테킷 수강생</h1>
    </header>
  );
}
