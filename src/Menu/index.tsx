import React, { useState } from "react";
import { MenuIcon } from "./MenuIcon";
import "./index.scss";
import { CrossIcon } from "./CrossIcon";

export interface MenuOption {
  name: string;
}

export interface MenuProps {
  selectedOption?: MenuOption | null;
  options: MenuOption[];
  onSelect: (option: MenuOption | null) => void;
}

export const Menu: React.FC<MenuProps> = ({
  options,
  onSelect,
  selectedOption,
}: MenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sioux-cb-ui-outerMenuContainer">
      <div
        className={`sioux-cb-ui-menuContainer${
          menuOpen ? " visible" : " hidden"
        }`}
      >
        <p className="sioux-cb-ui-instruction">Select one to explore</p>
        <div className="sioux-cb-ui-menuOptionsContainer">
          {options.map((option) => (
            <a
              key={option.name}
              className={`sioux-cb-ui-menuOption${
                selectedOption?.name === option.name ? " selected" : ""
              }`}
              onClick={() => {
                onSelect(option);
                setMenuOpen(false);
              }}
            >
              {option.name}
              {selectedOption?.name === option.name && (
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelect(null);
                    setMenuOpen(false);
                  }}
                >
                  <CrossIcon />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="sioux-cb-ui-triggerWrapper">
        <a
          className="sioux-cb-ui-trigger"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuIcon active={menuOpen} />
        </a>
        <p className="sioux-cb-ui-selectedText">
          {selectedOption ? selectedOption.name : "All"}
        </p>
      </div>
    </div>
  );
};
