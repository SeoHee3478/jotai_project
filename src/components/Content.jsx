import React from "react";
import { useAtom } from "jotai";
import { themeAtom } from "../data/jotai";

export default function Content() {
  const [theme] = useAtom(themeAtom);
  return (
    <div className={`content ${theme === "light" ? "light" : "dark"}`}>
      <p>이 사이트는 프론트엔드 테킷 수강생과 함께 공부하는 사이트입니다.</p>
    </div>
  );
}
