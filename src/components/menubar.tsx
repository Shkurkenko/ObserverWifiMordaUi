import { useState } from "preact/hooks";

import "./menubar.css";

export function Menubar({ model, currentIndex, itemOnClick }) {
  return (
    <div className="menubar w-full">
      <div className="menubar-container w-full">
        <ul className="menubar-list w-full">
          {model.map((menubarItem) => (
            <li
              key={menubarItem.id}
              onClick={() => itemOnClick(menubarItem.id)}
              className={`menubar-list-item task-toggle  ${
                currentIndex === menubarItem.id && "menubar-active"
              }`}
            >
              {menubarItem.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
