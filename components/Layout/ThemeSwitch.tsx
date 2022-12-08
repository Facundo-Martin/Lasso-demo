import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme == "system" ? systemTheme : theme;
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  console.log("currentTheme:", currentTheme, theme);
  if (currentTheme == "dark")
    return (
      <button
        type="button"
        onClick={() => setTheme("light")}
        className="rounded-full bg-white  p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-900 hover:dark:text-gray-400 text-gray-400 hover:text-gray-500"
      >
        <SunIcon className="w-6 h-6" />
      </button>
    );
  else
    return (
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className="rounded-full bg-white  p-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-900 hover:dark:text-gray-400 text-gray-400 hover:text-gray-500"
      >
        <MoonIcon className="w-6 h-6" />
      </button>
    );
};

export default ThemeSwitch;
