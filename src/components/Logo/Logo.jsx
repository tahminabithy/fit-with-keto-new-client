import React from "react";

const Logo = () => (
  <svg
    width="300"
    height="80"
    viewBox="0 0 300 80"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: "#4CAF50", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#FF5722", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <text
      x="0"
      y="55"
      fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
      fontSize="50"
      fontWeight="bold"
      fill="url(#logoGradient)"
    >
      Fit With Keto
    </text>
  </svg>
);

export default Logo;
