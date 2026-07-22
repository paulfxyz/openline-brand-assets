export default function WorldMapDotted() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1000 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Dotted world map */}
      <g opacity="0.4">
        {/* North America - West Coast */}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={`na-w-${i}`} cx={140 + (i % 6) * 8} cy={60 + Math.floor(i / 6) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle key={`na-c-${i}`} cx={180 + (i % 8) * 8} cy={65 + Math.floor(i / 8) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <circle key={`na-e-${i}`} cx={245 + (i % 7) * 8} cy={70 + Math.floor(i / 7) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* Europe */}
        {Array.from({ length: 50 }).map((_, i) => (
          <circle key={`eu-${i}`} cx={420 + (i % 10) * 7} cy={35 + Math.floor(i / 10) * 7} r="1.5" fill="#B8B8B8" />
        ))}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={`eu2-${i}`} cx={430 + (i % 6) * 8} cy={70 + Math.floor(i / 6) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* Asia - West */}
        {Array.from({ length: 45 }).map((_, i) => (
          <circle key={`as-w-${i}`} cx={500 + (i % 9) * 8} cy={50 + Math.floor(i / 9) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        {/* Asia - Central */}
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={`as-c-${i}`} cx={570 + (i % 10) * 8} cy={45 + Math.floor(i / 10) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        {/* Asia - East */}
        {Array.from({ length: 50 }).map((_, i) => (
          <circle key={`as-e-${i}`} cx={650 + (i % 10) * 8} cy={55 + Math.floor(i / 10) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* Africa - North */}
        {Array.from({ length: 45 }).map((_, i) => (
          <circle key={`af-n-${i}`} cx={420 + (i % 9) * 8} cy={150 + Math.floor(i / 9) * 7} r="1.5" fill="#B8B8B8" />
        ))}
        {/* Africa - Central */}
        {Array.from({ length: 50 }).map((_, i) => (
          <circle key={`af-c-${i}`} cx={425 + (i % 10) * 7} cy={200 + Math.floor(i / 10) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        {/* Africa - South */}
        {Array.from({ length: 35 }).map((_, i) => (
          <circle key={`af-s-${i}`} cx={435 + (i % 7) * 7} cy={260 + Math.floor(i / 7) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* South America - North */}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle key={`sa-n-${i}`} cx={240 + (i % 8) * 7} cy={190 + Math.floor(i / 8) * 7} r="1.5" fill="#B8B8B8" />
        ))}
        {/* South America - Central */}
        {Array.from({ length: 45 }).map((_, i) => (
          <circle key={`sa-c-${i}`} cx={235 + (i % 9) * 7} cy={235 + Math.floor(i / 9) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        {/* South America - South */}
        {Array.from({ length: 30 }).map((_, i) => (
          <circle key={`sa-s-${i}`} cx={230 + (i % 6) * 7} cy={290 + Math.floor(i / 6) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* Australia */}
        {Array.from({ length: 60 }).map((_, i) => (
          <circle key={`au-${i}`} cx={720 + (i % 12) * 8} cy={300 + Math.floor(i / 12) * 8} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* Southeast Asia / Indonesia */}
        {Array.from({ length: 40 }).map((_, i) => (
          <circle key={`sea-${i}`} cx={650 + (i % 10) * 7} cy={220 + Math.floor(i / 10) * 7} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* Japan / Korea */}
        {Array.from({ length: 20 }).map((_, i) => (
          <circle key={`jp-${i}`} cx={730 + (i % 4) * 7} cy={60 + Math.floor(i / 4) * 7} r="1.5" fill="#B8B8B8" />
        ))}
        
        {/* Greenland */}
        {Array.from({ length: 25 }).map((_, i) => (
          <circle key={`gl-${i}`} cx={300 + (i % 5) * 8} cy={15 + Math.floor(i / 5) * 7} r="1.5" fill="#B8B8B8" />
        ))}
      </g>
      
      {/* Location Pins */}
      {/* Pin 1 - West Coast USA */}
      <g transform="translate(135, 70)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
      
      {/* Pin 2 - North Africa/Mediterranean */}
      <g transform="translate(450, 140)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
      
      {/* Pin 3 - Middle East/Asia */}
      <g transform="translate(550, 100)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
      
      {/* Pin 4 - Europe */}
      <g transform="translate(390, 50)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
      
      {/* Pin 5 - South America */}
      <g transform="translate(255, 250)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
      
      {/* Pin 6 - East Asia */}
      <g transform="translate(720, 80)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
      
      {/* Pin 7 - Australia */}
      <g transform="translate(780, 320)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
      
      {/* Pin 8 - Southeast Asia */}
      <g transform="translate(680, 220)">
        <ellipse cx="0" cy="30" rx="12" ry="4" fill="#000" opacity="0.2" />
        <path
          d="M0,-20 C-8,-20 -15,-13 -15,-5 C-15,3 0,20 0,20 C0,20 15,3 15,-5 C15,-13 8,-20 0,-20 Z"
          fill="#ff6616"
        />
        <circle cx="0" cy="-5" r="6" fill="white" />
      </g>
    </svg>
  );
}
