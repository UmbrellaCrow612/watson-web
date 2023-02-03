import { useState, useMemo, useEffect } from "react";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { themeChange } from "theme-change";

export default function ThemeSwitcher() {
  const [input, setInput] = useState("");
  useEffect(() => {
    themeChange(false);
  }, [input]);

  const filteredThemes = useMemo(() => {
    const Themes = [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
    ];

    return Themes.filter((t) =>
      t.toLowerCase().includes(input.toLowerCase().trim())
    );
  }, [input]);

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="text-xl btn btn-outline">
          <HiOutlineColorSwatch />
        </label>
        <ul
          tabIndex={0}
          className="inline-block p-2 overflow-y-scroll shadow dropdown-content menu bg-base-100 rounded-box w-52 h-60"
        >
          <input
            type="text"
            placeholder="Type here"
            className="w-full max-w-xs input input-bordered"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {filteredThemes.map((theme) => (
            <li key={theme}>
              <button data-set-theme={`${theme}`} className="btn btn-ghost">
                {theme}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
