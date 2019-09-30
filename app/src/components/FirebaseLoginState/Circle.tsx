import React from "react";

import { CircleProps } from "./types";

export const Circle: React.FC<CircleProps> = ({ color, className }) => (
  <svg
    className={className}
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
  >
    <circle cx="5" cy="5" r="5" />
  </svg>
);
