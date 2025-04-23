import { useEffect, useState } from "react";

export function usePreferredTheme() {
  const getPreferredTheme = () => {
    if (window.localStorage.getItem("theme")) {
      return window.localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };

  const [theme, setTheme] = useState(getPreferredTheme);

  useEffect(() => {
    // Atualiza se o usuário mudar o tema do SO
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (e) => setTheme(e.matches ? "dark" : "light");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Permite alternar manualmente e salva no localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    window.localStorage.setItem("theme", newTheme);
  };

  return [theme, toggleTheme];
}
