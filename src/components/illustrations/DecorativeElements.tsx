import React from 'react';

/**
 * Hand-drawn Neo-Brutalist decorative shapes and vector illustrations
 * inspired by the tactile cut-paper, print-poster aesthetic of the reference.
 */

// 4-point sparkle star in ink or antique gold
export const SparkleStar: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = '', size = 24, color = '#211A1B' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
  </svg>
);

// Cut-out Scalloped Cloud / Flower shape (like the border elements in the reference)
export const ScallopedShape: React.FC<{
  className?: string;
  fill?: string;
  size?: number;
}> = ({ className = '', fill = '#FBF7F0', size = 100 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M50 12C57 5 69 7 73 16C78 14 87 18 88 26C96 28 98 39 93 46C98 52 97 63 90 68C93 76 86 85 78 85C77 93 67 98 59 93C52 98 42 96 38 88C30 90 22 84 21 75C13 74 9 63 13 56C8 49 10 38 18 34C17 26 25 19 33 21C38 12 47 11 50 12Z"
      fill={fill}
      stroke="#211A1B"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
  </svg>
);

// Wireframe mathematical globe sphere (reinterpreting the wireframe sphere in reference)
export const WireframeGlobe: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 80 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Outer circle */}
    <circle cx="40" cy="40" r="37" stroke="#211A1B" strokeWidth="2.5" />
    {/* Equator & parallels */}
    <ellipse cx="40" cy="40" rx="37" ry="14" stroke="#211A1B" strokeWidth="1.8" strokeDasharray="1 0" />
    <ellipse cx="40" cy="40" rx="37" ry="27" stroke="#211A1B" strokeWidth="1.8" />
    {/* Meridians */}
    <ellipse cx="40" cy="40" rx="14" ry="37" stroke="#211A1B" strokeWidth="1.8" />
    <ellipse cx="40" cy="40" rx="27" ry="37" stroke="#211A1B" strokeWidth="1.8" />
    {/* Center axes */}
    <line x1="3" y1="40" x2="77" y2="40" stroke="#211A1B" strokeWidth="1.8" />
    <line x1="40" y1="3" x2="40" y2="77" stroke="#211A1B" strokeWidth="1.8" />
  </svg>
);

// Retro pointer cursor arrow (like the orange pointer in reference)
export const BrutalCursor: React.FC<{
  className?: string;
  size?: number;
  color?: string;
}> = ({ className = '', size = 48, color = '#651D32' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 6L20 42L26 26L42 20L6 6Z"
      fill={color}
      stroke="#211A1B"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <path
      d="M26 26L38 38"
      stroke="#211A1B"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
  </svg>
);

// Scribble marker underline SVG
export const HandScribble: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = '', color = '#D7B46A' }) => (
  <svg
    viewBox="0 0 200 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 11C35 4 82 14 114 6C145 -1 176 13 197 7"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Hand-drawn open notebook / textbook
export const HandDrawnBook: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Left page */}
    <path
      d="M6 14C16 11 26 13 28 16V46C26 43 16 41 6 44V14Z"
      fill="#FBF7F0"
      stroke="#211A1B"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    {/* Right page */}
    <path
      d="M50 14C40 11 30 13 28 16V46C30 43 40 41 50 44V14Z"
      fill="#FBF7F0"
      stroke="#211A1B"
      strokeWidth="3"
      strokeLinejoin="round"
    />
    {/* Center binding */}
    <line x1="28" y1="16" x2="28" y2="46" stroke="#211A1B" strokeWidth="3" />
    {/* Text lines left */}
    <line x1="11" y1="22" x2="23" y2="21" stroke="#211A1B" strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="28" x2="23" y2="27" stroke="#211A1B" strokeWidth="2" strokeLinecap="round" />
    <line x1="11" y1="34" x2="20" y2="33" stroke="#211A1B" strokeWidth="2" strokeLinecap="round" />
    {/* Text lines right */}
    <line x1="33" y1="21" x2="45" y2="22" stroke="#211A1B" strokeWidth="2" strokeLinecap="round" />
    <line x1="33" y1="27" x2="45" y2="28" stroke="#211A1B" strokeWidth="2" strokeLinecap="round" />
    <line x1="33" y1="33" x2="42" y2="34" stroke="#211A1B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

// Monogram wax seal stamp
export const MonogramSeal: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 48 }) => (
  <div
    className={`inline-flex items-center justify-center font-serif font-black brutal-border rounded-full bg-[#651D32] text-[#FBF7F0] ${className}`}
    style={{ width: size, height: size }}
    aria-label="SK Monogram"
  >
    <span className="tracking-tighter" style={{ fontSize: size * 0.42 }}>
      SK
    </span>
  </div>
);
