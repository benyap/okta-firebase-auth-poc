import React from "react";

import "./styles.scss";

export const ScrollPanel: React.FC = ({ children }) => {
  return (
    <div className="scroll">
      <div className="overlay">
        <div className="panel">{children}</div>
      </div>
    </div>
  );
};
