import { FaCloudMoon, FaCloudSun, FaRegMoon } from "react-icons/fa";
import { IoMdRainy } from "react-icons/io";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

export const ThemeIcons = ({}) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    return theme === "moony"
      ? setTheme("sunny")
      : theme === "sunny"
      ? setTheme("rainy")
      : theme === "rainy"
      ? setTheme("moony")
      : null;
  };
  return (
    <>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 px-2 py-1 bg-gray-800 text-white rounded-md transition-all duration-300 transform hover:scale-110"
      >
        {theme === "moony" ? (
          <FaCloudSun className="text-yellow-300 text-3xl" />
        ) : theme === "sunny" ? (
          <IoMdRainy className="text-blue-500 text-3xl" />
        ) : theme === "rainy" ? (
          <FaCloudMoon className="text-gray-500 text-3xl" />
        ) : null}
      </button>
      {theme === "rainy" && (
        <div
          id="raindrop-container"
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        >
        </div>
      )}
      {/* {theme === "moony" && <div className="moon"></div>}
      {theme === "sunny" && <div className="sun"></div>} */}
    </>
  );
};
