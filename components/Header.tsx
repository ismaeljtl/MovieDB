import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className=" container mx-auto navbar bg-base-100 ">
      <div className="flex-1">
        <p className="normal-case text-xl">5Mins Movies 🎬</p>
      </div>
      <div className="flex-none">
        <button
          data-set-theme={`${theme === "dark" ? "light" : "dark"}`}
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          aria-label="theme button"
        >
          {!mounted || theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
};

export default Header;
