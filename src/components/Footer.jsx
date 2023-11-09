import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../data/jotai";

export default function Footer() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <footer className={`footer ${theme === "light" ? "white" : "dark"}`}>
      <button
        onClick={() =>
          setTheme((state) => (state === "light" ? "dark" : "light"))
        }
      >
        테마 변경
      </button>
    </footer>
  );
}
