import { useTheme } from "./ThemeContext";

const ThemedSection = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className={`py-12 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-300 text-black"}`}>
      <button onClick={() => setDarkMode(!darkMode)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Toggle Theme
      </button>
      <p className="mt-4">This section follows the global theme.</p>
    </div>
  );
};

export default ThemedSection;
