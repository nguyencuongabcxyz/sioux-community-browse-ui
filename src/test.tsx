import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { Menu, MenuOption } from "./Menu";
import "./test.scss";

const options: MenuOption[] = [
  { name: "Nationality" },
  { name: "Role" },
  { name: "Birthplace" },
  { name: "Year of birth" },
  { name: "Month of birth" },
  { name: "Project" },
  { name: "Club" },
  { name: "Gender" },
  { name: "Joining year" },
];

const Test = () => {
  const [selectedOption, setSelectedOption] = useState<MenuOption | null>(null);

  return (
    <div>
      <Menu
        options={options}
        selectedOption={selectedOption}
        onSelect={(option) => setSelectedOption(option)}
      />
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container">
      <div className="menuContainerMain">
        <Test />
      </div>
    </div>
  </StrictMode>
);
