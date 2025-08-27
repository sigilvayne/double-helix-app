import React, { useState } from "react";
import commandData from "../data/commandData";

export default function CommandList({ setCommandInput }) {
  const [openFolders, setOpenFolders] = useState({}); 

  const toggleFolder = (index) => {
    setOpenFolders((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <ul className="command-list">
      <h2 className="h2-margin">Команди</h2>
      {commandData.map((folder, index) => (
        <li key={folder.name}>
          <div
            className="folder-label"
            onClick={() => toggleFolder(index)}
          >
            {folder.icon}
            {folder.name}
          </div>

          <ul
            className={`nested-list ${
              openFolders[index] ? "" : "collapsed"
            }`}
          >
            {folder.items.map((cmd) => (
              <li
                key={cmd.label}
                onClick={() => setCommandInput(cmd.script || cmd.label)}
              >
                {cmd.label}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}