import React from 'react';

/**
 * Original hand-drawn Neo-Brutalist character mascot for Swaliha Khan:
 * "The Curious Thinker"
 * Reinterpreting the vintage rubber-hose cartoon heart character from the reference
 * with thick ink outlines, retro sneakers, peace sign, and a coded notebook.
 */
export const MascotCharacter: React.FC<{
  className?: string;
  size?: number;
}> = ({ className = '', size = 320 }) => {
  return (
    <div className={`relative inline-block select-none ${className}`} style={{ width: size, height: size * 1.05 }}>
      <svg
        viewBox="0 0 320 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[4px_4px_0px_#211A1B]"
        aria-label="Swaliha's Curious Thinker Mascot"
        role="img"
      >
        {/* Shadow base under sneakers */}
        <ellipse cx="185" cy="328" rx="85" ry="8" fill="#211A1B" opacity="0.85" />

        {/* Legs with striped socks */}
        {/* Left leg */}
        <rect x="150" y="240" width="16" height="50" fill="#FBF7F0" stroke="#211A1B" strokeWidth="3.5" />
        <line x1="150" y1="255" x2="166" y2="255" stroke="#651D32" strokeWidth="3" />
        <line x1="150" y1="265" x2="166" y2="265" stroke="#211A1B" strokeWidth="2.5" />

        {/* Right leg */}
        <rect x="188" y="240" width="16" height="50" fill="#FBF7F0" stroke="#211A1B" strokeWidth="3.5" />
        <line x1="188" y1="255" x2="204" y2="255" stroke="#651D32" strokeWidth="3" />
        <line x1="188" y1="265" x2="204" y2="265" stroke="#211A1B" strokeWidth="2.5" />

        {/* Left sneaker */}
        <g>
          {/* Sole */}
          <path
            d="M130 315 C130 310 145 305 170 305 L175 315 L175 324 L130 324 Z"
            fill="#FBF7F0"
            stroke="#211A1B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Upper shoe */}
          <path
            d="M142 290 L166 290 L172 305 C155 305 138 308 135 312 L132 305 C132 298 136 292 142 290 Z"
            fill="#211A1B"
            stroke="#211A1B"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Sneaker rubber toe cap */}
          <path
            d="M130 315 C130 310 134 308 140 308 L140 324 L130 324 Z"
            fill="#FBF7F0"
            stroke="#211A1B"
            strokeWidth="2.5"
          />
          {/* Laces */}
          <line x1="148" y1="294" x2="158" y2="299" stroke="#FBF7F0" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="147" y1="300" x2="159" y2="304" stroke="#FBF7F0" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Right sneaker */}
        <g>
          {/* Sole */}
          <path
            d="M172 315 C172 310 195 305 228 305 L232 315 L232 324 L172 324 Z"
            fill="#FBF7F0"
            stroke="#211A1B"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Upper shoe */}
          <path
            d="M182 290 L206 290 L218 305 C198 305 180 308 176 312 L174 305 C174 298 177 292 182 290 Z"
            fill="#211A1B"
            stroke="#211A1B"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Sneaker toe cap */}
          <path
            d="M172 315 C172 310 176 308 184 308 L184 324 L172 324 Z"
            fill="#FBF7F0"
            stroke="#211A1B"
            strokeWidth="2.5"
          />
          {/* Laces */}
          <line x1="190" y1="294" x2="202" y2="299" stroke="#FBF7F0" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="189" y1="300" x2="203" y2="304" stroke="#FBF7F0" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Main Body: Retro warm heart silhouette */}
        <path
          d="M170 250
             C120 220 70 170 85 110
             C95 70 135 65 170 100
             C205 65 245 70 255 110
             C270 170 220 220 170 250 Z"
          fill="#D7B46A"
          stroke="#211A1B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        {/* Highlight sheen on top-left of heart body */}
        <path
          d="M100 115 C95 85 125 78 145 92"
          stroke="#FBF7F0"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Face features */}
        {/* Left Eye */}
        <g>
          <ellipse
            cx="140"
            cy="140"
            rx="20"
            ry="30"
            fill="#FBF7F0"
            stroke="#211A1B"
            strokeWidth="3.5"
            transform="rotate(-5 140 140)"
          />
          {/* Pupil with pie wedge / retro cutout */}
          <path
            d="M142 128 C150 128 156 135 156 148 C156 158 148 165 140 165 C132 165 130 156 130 146 C130 136 135 128 142 128 Z"
            fill="#211A1B"
          />
          {/* Eye reflection dot */}
          <circle cx="137" cy="138" r="4.5" fill="#FBF7F0" />
          {/* Eyebrow */}
          <path
            d="M125 106 C135 98 150 102 156 110"
            stroke="#211A1B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* Right Eye */}
        <g>
          <ellipse
            cx="195"
            cy="142"
            rx="19"
            ry="29"
            fill="#FBF7F0"
            stroke="#211A1B"
            strokeWidth="3.5"
            transform="rotate(6 195 142)"
          />
          {/* Pupil */}
          <path
            d="M198 130 C206 130 211 137 211 150 C211 160 203 166 196 166 C189 166 186 158 186 148 C186 138 190 130 198 130 Z"
            fill="#211A1B"
          />
          {/* Reflection */}
          <circle cx="193" cy="140" r="4.5" fill="#FBF7F0" />
          {/* Eyebrow */}
          <path
            d="M182 110 C190 102 205 104 212 114"
            stroke="#211A1B"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* Small subtle smile & blush */}
        <path
          d="M160 178 C165 183 175 183 180 178"
          stroke="#211A1B"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Rosy cheeks */}
        <ellipse cx="118" cy="168" rx="8" ry="5" fill="#C98D96" opacity="0.8" />
        <ellipse cx="218" cy="170" rx="8" ry="5" fill="#C98D96" opacity="0.8" />

        {/* Left arm: Peace sign ✌️ */}
        <g>
          {/* Arm curve */}
          <path
            d="M95 145 C65 140 50 120 62 90"
            fill="none"
            stroke="#211A1B"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M95 145 C65 140 50 120 62 90"
            fill="none"
            stroke="#D7B46A"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Hand with Peace sign fingers */}
          {/* Palm base */}
          <circle cx="62" cy="85" r="14" fill="#D7B46A" stroke="#211A1B" strokeWidth="3.5" />
          {/* Index finger */}
          <rect
            x="48"
            y="50"
            width="10"
            height="26"
            rx="5"
            fill="#D7B46A"
            stroke="#211A1B"
            strokeWidth="3.5"
            transform="rotate(-18 48 50)"
          />
          {/* Middle finger */}
          <rect
            x="64"
            y="48"
            width="10"
            height="27"
            rx="5"
            fill="#D7B46A"
            stroke="#211A1B"
            strokeWidth="3.5"
            transform="rotate(12 64 48)"
          />
          {/* Folded thumb & other fingers */}
          <circle cx="58" cy="82" r="6" fill="#D7B46A" stroke="#211A1B" strokeWidth="2.5" />
        </g>

        {/* Right arm: Hugging a coded notebook in Royal Oxblood */}
        <g>
          {/* Arm outline */}
          <path
            d="M230 160 C255 170 255 210 215 220"
            fill="none"
            stroke="#211A1B"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M230 160 C255 170 255 210 215 220"
            fill="none"
            stroke="#D7B46A"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Code Notebook */}
          <g transform="translate(195, 175) rotate(-12)">
            <rect
              x="0"
              y="0"
              width="46"
              height="58"
              rx="4"
              fill="#651D32"
              stroke="#211A1B"
              strokeWidth="3.5"
            />
            {/* Paper pages edge */}
            <rect x="5" y="4" width="36" height="50" rx="2" fill="#FBF7F0" />
            {/* Code symbol </> on notebook cover */}
            <text
              x="23"
              y="32"
              fontFamily="monospace"
              fontSize="16"
              fontWeight="bold"
              fill="#211A1B"
              textAnchor="middle"
            >
              &lt;/&gt;
            </text>
            <line x1="10" y1="40" x2="36" y2="40" stroke="#651D32" strokeWidth="2" strokeLinecap="round" />
            <line x1="10" y1="45" x2="28" y2="45" stroke="#D7B46A" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Hand clasping notebook */}
          <ellipse
            cx="206"
            cy="216"
            rx="12"
            ry="9"
            fill="#D7B46A"
            stroke="#211A1B"
            strokeWidth="3.5"
            transform="rotate(10 206 216)"
          />
          {/* Thumb detail */}
          <circle cx="212" cy="213" r="4" fill="#D7B46A" stroke="#211A1B" strokeWidth="2.5" />
        </g>

        {/* Little decorative star sparkle near head */}
        <path
          d="M268 140 C268 145 272 148 277 148 C272 148 268 152 268 156 C268 152 264 148 259 148 C264 148 268 145 268 140 Z"
          fill="#211A1B"
        />
        <path
          d="M102 215 C102 219 105 222 109 222 C105 222 102 225 102 229 C102 225 99 222 95 222 C99 222 102 219 102 215 Z"
          fill="#211A1B"
        />
      </svg>
    </div>
  );
};
